/*
 *   swade-tokenbar: Foundry Virtual Tabletop for Savage Worlds Adventurer Edition tokenbar
 *   Copyright (C) 2021 Chris Dempsey (https://github.com/cdempsey)
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default class FoundrySettings {
    private readonly defaultScope: string = 'world';
    private moduleName: string;

    constructor(moduleName: string) {
        this.moduleName = moduleName;
    }

    onInitialize(): void {
        this.addBooleanSetting('test');
    }

    private addBooleanSetting(settingName: string, defaultValue = true): void {
        game.settings.register(this.moduleName, settingName, {
            name: game.i18n.localize(`${this.moduleName}.${settingName}.name`),
            hint: game.i18n.localize(`${this.moduleName}.${settingName}.hint`),
            scope: this.defaultScope,
            config: true,
            default: defaultValue,
            type: Boolean,
        });
    }

    private addChoicesSetting(settingName: string, defaultValue: string, choices: any): void {
        game.settings.register(this.moduleName, settingName, {
            name: game.i18n.localize(`${this.moduleName}.${settingName}.name`),
            hint: game.i18n.localize(`${this.moduleName}.${settingName}.hint`),
            scope: this.defaultScope,
            config: true,
            default: defaultValue,
            choices: choices,
            type: String,
        });
    }
}
