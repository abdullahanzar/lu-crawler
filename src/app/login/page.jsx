"use client";

import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import theme from "@/theme";
import { getURL } from "@/utils/helpers";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createSupabaseBrowserClient();

export default function LogIn() {
  console.log(getURL());
  return (
    <main className="min-h-screen">
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card
          sx={{
            minWidth: { sm: "30%", xs: "80%" },
            m: { sm: "100px", xs: "50px" },
            p: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#9c8a8a",
                    brandAccent: "#827d7d",
                  },
                },
              },
            }}
            providers={["google"]}
            theme="dark"
            redirectTo={getURL()}
          />
        </Card>
      </Stack>
    </main>
  );
}
