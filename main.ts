import { Plugin, Notice, Editor, requestUrl, PluginSettingTab, Setting } from 'obsidian';
import AmpliFlowSettingTab from 'settings';

interface AuthResponse {
  status: number;
  errors: Record<string, string>;
  data: {
    id: string;
    username: string;
    email: string;
    token: string;
  };
}

interface PagePayload {
  title: string;
  content: string;
}

interface AmpliFlowSettings {
  tenant: string;
  email: string;
  password: string;
}

const DEFAULT_SETTINGS: AmpliFlowSettings = {
  tenant: '',
  email: '',
  password: ''
};

export default class AmpliFlowPublisher extends Plugin {
  settings: AmpliFlowSettings;

  async onload() {
    console.log('Loading AmpliFlow Publisher plugin');

    await this.loadSettings();

    this.addSettingTab(new AmpliFlowSettingTab(this.app, this));

    this.addCommand({
      id: 'publish-note',
      name: 'Publish Note to AmpliFlow',
      editorCallback: (editor: Editor) => this.publishNoteToAmpliFlow(editor)
    });
  }

  async publishNoteToAmpliFlow(editor: Editor) {
    const noteContent = editor.getValue();
    const noteTitle = this.app.workspace.getActiveFile()?.basename || 'Untitled';

    try {
      const token = await this.getAuthToken();
      await this.createPage({ title: noteTitle, content: noteContent }, token);
      new Notice('Page published successfully!');
    } catch (error) {
      console.error('Failed to publish page:', error);
      new Notice('Failed to publish page.');
    }
  }

  async getAuthToken(): Promise<string> {
    const response = await requestUrl({
      url: `https://${this.settings.tenant}.ampliflow.com/api/Auth/login`,
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify({
        email: this.settings.email,
        password: this.settings.password,
        localeId: 'en'
      })
    });

    const data: AuthResponse = response.json;
    return data.data.token;
  }

  async createPage(payload: PagePayload, token: string): Promise<void> {
    await requestUrl({
      url: `https://${this.settings.tenant}.ampliflow.com/api/page`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}