import postgres from "postgres";

const {DATABASE_URL} = process.env;
const isLocal = DATABASE_URL.includes("localhost");
const sql = postgres(DATABASE_URL, {ssl: isLocal ? 'prefer' : 'require'});

async function getPostgresVersion() {
    // return sql`select version()`;
    return sql`select * from playing_with_neon`;
}

export default async () => {
    return JSON.stringify(await getPostgresVersion())
}
