import * as ls from "local-storage";

export class AppStorage {
    static get(key: string): string | null {
        if (typeof localStorage !== "undefined") {
            if (localStorage.getItem(key)) {
                return localStorage.getItem(key);
            }
            return null;
        }
        return ls.get(key);
    }

    static set(key: string, value: any): void {
        ls.set(key, value);
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(key, value);
        }
    }

    static remove(key: string): void {
        ls.remove(key);
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem(key);
        }
    }
}
