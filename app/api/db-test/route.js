import { NextResponse } from "next/server";
import { Client } from "pg";

export async function POST(request) {
  try {
    const connectionString =
      "postgres://postgres.dstcvsijfvazhjftpkln:Randomhashdog1!@aws-0-eu-central-1.pooler.supabase.com:5432/postgres";
    const client = new Client({
      connectionString: connectionString,
    });

    client.connect();

    client.query(`SELECT email, created_at FROM auth.users`, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res.rows);
      }

      client.end((error) => {
        if (error) {
          console.error("Error closing client:", error);
        } else {
          console.log("Client closed successfully.");
        }
      });
    });

    return NextResponse.json(
      {
        success: "Connected to database",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    NextResponse.json(
      {
        error: error,
      },
      {
        status: 400,
      }
    );
  }
}
