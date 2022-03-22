const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1laG9wcHVhdWhwd3dvZmVmcGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzIzMzEsImV4cCI6MTk2MzU0ODMzMX0.SdElfTGiCmXLkKax2vtO9-vVw5ioXrQMRkH28fDYKY8';

const SUPABASE_URL = 'https://mehoppuauhpwwofefpdc.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllBands() {
    const response = await client
        .from('bands')
        .select('*');

    return response.body;
}

export async function getAllCandies() {
    const response = await client
        .from('candies')
        .select('*');

    return response.body;
}


export async function getAllCars() {
    const response = await client
        .from('cars')
        .select('*');

    return response.body;
}


export async function getAllInstruments() {
    const response = await client
        .from('instruments')
        .select('*');

    return response.body;
}
