import postgres from "postgres";

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PROJECT_NAME} = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${PROJECT_NAME}`;
const sql = postgres(URL, {ssl: 'require'});

async function getPostgresVersion() {
    // return sql`select version()`;
    return sql`select * from playing_with_neon`;
}

export default async () => {
    return JSON.stringify(await getPostgresVersion())
}
