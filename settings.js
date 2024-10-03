'use strict';

var tslib_es6 = require('./tslib.es6-fde326af.js');
var obsidian = require('obsidian');

var AmpliFlowSettingTab = /** @class */ (function (_super) {
    tslib_es6.__extends(AmpliFlowSettingTab, _super);
    function AmpliFlowSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    AmpliFlowSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'AmpliFlow Publisher Settings' });
        new obsidian.Setting(containerEl)
            .setName('Tenant')
            .setDesc('Your AmpliFlow tenant name')
            .addText(function (text) { return text
            .setPlaceholder('Enter your tenant')
            .setValue(_this.plugin.settings.tenant)
            .onChange(function (value) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
            return tslib_es6.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.tenant = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Email')
            .setDesc('Your AmpliFlow email address')
            .addText(function (text) { return text
            .setPlaceholder('Enter your email')
            .setValue(_this.plugin.settings.email)
            .onChange(function (value) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
            return tslib_es6.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.email = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Password')
            .setDesc('Your AmpliFlow password')
            .addText(function (text) { return text
            .setPlaceholder('Enter your password')
            .setValue(_this.plugin.settings.password)
            .onChange(function (value) { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
            return tslib_es6.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.password = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
    };
    return AmpliFlowSettingTab;
}(obsidian.PluginSettingTab));

module.exports = AmpliFlowSettingTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbXBsaUZsb3dQdWJsaXNoZXIgZnJvbSBcIm1haW5cIjtcclxuaW1wb3J0IHsgUGx1Z2luU2V0dGluZ1RhYiwgQXBwLCBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcblxyXG5pbnRlcmZhY2UgQW1wbGlGbG93U2V0dGluZ3Mge1xyXG4gICAgdGVuYW50OiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgREVGQVVMVF9TRVRUSU5HUzogQW1wbGlGbG93U2V0dGluZ3MgPSB7XHJcbiAgICB0ZW5hbnQ6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW1wbGlGbG93U2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG4gICAgcGx1Z2luOiBBbXBsaUZsb3dQdWJsaXNoZXI7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBBbXBsaUZsb3dQdWJsaXNoZXIpIHtcclxuICAgICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xyXG4gICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcclxuICAgIH1cclxuICBcclxuICAgIGRpc3BsYXkoKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcbiAgXHJcbiAgICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcbiAgXHJcbiAgICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0FtcGxpRmxvdyBQdWJsaXNoZXIgU2V0dGluZ3MnIH0pO1xyXG4gIFxyXG4gICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuICAgICAgICAuc2V0TmFtZSgnVGVuYW50JylcclxuICAgICAgICAuc2V0RGVzYygnWW91ciBBbXBsaUZsb3cgdGVuYW50IG5hbWUnKVxyXG4gICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxyXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIHRlbmFudCcpXHJcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGVuYW50KVxyXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW5hbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICB9KSk7XHJcbiAgXHJcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgIC5zZXROYW1lKCdFbWFpbCcpXHJcbiAgICAgICAgLnNldERlc2MoJ1lvdXIgQW1wbGlGbG93IGVtYWlsIGFkZHJlc3MnKVxyXG4gICAgICAgIC5hZGRUZXh0KHRleHQgPT4gdGV4dFxyXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIGVtYWlsJylcclxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbWFpbClcclxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZW1haWwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICB9KSk7XHJcbiAgXHJcbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG4gICAgICAgIC5zZXROYW1lKCdQYXNzd29yZCcpXHJcbiAgICAgICAgLnNldERlc2MoJ1lvdXIgQW1wbGlGbG93IHBhc3N3b3JkJylcclxuICAgICAgICAuYWRkVGV4dCh0ZXh0ID0+IHRleHRcclxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignRW50ZXIgeW91ciBwYXNzd29yZCcpXHJcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGFzc3dvcmQpXHJcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBhc3N3b3JkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiU2V0dGluZyIsIl9fYXdhaXRlciIsIlBsdWdpblNldHRpbmdUYWIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBZUUsSUFBQSxtQkFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUFpREEsbUJBQWdCLENBQUEsbUJBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtJQUcvRCxTQUFZLG1CQUFBLENBQUEsR0FBUSxFQUFFLE1BQTBCLEVBQUE7QUFBaEQsUUFBQSxJQUFBLEtBQUEsR0FDRSxNQUFNLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBQSxHQUFHLEVBQUUsTUFBTSxDQUFDLElBRW5CLElBQUEsQ0FBQTtBQURDLFFBQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0tBQ3RCO0FBRUQsSUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxPQUFPLEdBQVAsWUFBQTtRQUFBLElBdUNDLEtBQUEsR0FBQSxJQUFBLENBQUE7QUF0Q1MsUUFBQSxJQUFBLFdBQVcsR0FBSyxJQUFJLENBQUEsV0FBVCxDQUFVO1FBRTdCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVwQixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7UUFF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
