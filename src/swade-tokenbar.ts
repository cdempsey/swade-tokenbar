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
import FoundrySettings from './components/foundry-settings';

export default class SWADETokenBar {
    private readonly moduleName: string = 'swade-tokenbar';
    private readonly socketName: string = `module.${this.moduleName}`;
    private readonly settings: FoundrySettings = new FoundrySettings(this.moduleName);

    onInitialize(): void {
        this.settings.onInitialize();
    }

    onReady(): void {
        console.debug('swade-tokenbar', '|', 'onReady');
    }
}
