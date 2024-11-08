import AmpliFlowPublisher from "main";
import { PluginSettingTab, App, Setting } from "obsidian";

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

export default class AmpliFlowSettingTab extends PluginSettingTab {
    plugin: AmpliFlowPublisher;

    constructor(app: App, plugin: AmpliFlowPublisher) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName('Tenant')
            .setDesc('Your AmpliFlow tenant name')
            .addText(text => text
                .setPlaceholder('Enter your tenant')
                .setValue(this.plugin.settings.tenant)
                .onChange(async (value) => {
                    this.plugin.settings.tenant = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Email')
            .setDesc('Your AmpliFlow email address')
            .addText(text => text
                .setPlaceholder('Enter your email')
                .setValue(this.plugin.settings.email)
                .onChange(async (value) => {
                    this.plugin.settings.email = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Password')
            .setDesc('Your AmpliFlow password')
            .addText(text => text
                .setPlaceholder('Enter your password')
                .setValue(this.plugin.settings.password)
                .onChange(async (value) => {
                    this.plugin.settings.password = value;
                    await this.plugin.saveSettings();
                })
                .inputEl.type = 'password')
            ;
    }
}