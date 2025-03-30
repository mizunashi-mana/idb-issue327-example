import * as idb from 'idb';

export async function loadDB(): Promise<idb.IDBPDatabase<unknown>> {
    return await idb.openDB('my-db');
}
