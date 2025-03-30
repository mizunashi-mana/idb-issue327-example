import * as idb from 'idb';

interface DB extends idb.DBSchema {
    sample1: {
        key: string;
        value: string;
    };
    sample2: {
        key: string;
        value: number;
    };
};

export async function loadDB(): Promise<void> {
    const db = await idb.openDB<DB>('my-db');
    
    for (const v of db.objectStoreNames) {
        await db.delete(v, "key");
    }
}
