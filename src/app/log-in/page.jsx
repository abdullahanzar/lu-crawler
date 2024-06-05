"use client";

import { createSupabaseBrowserClient } from "@/supabase/browserClient";
import theme from "@/theme";
import { getURL } from "@/utils/helpers";
import { CardHeader, Stack, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createSupabaseBrowserClient();

export default function LogIn() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card
          sx={{
            minWidth: { sm: "80%", xs: "80%" },
            p: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <CardHeader
            title={
              <>
                <Typography sx={{ color: "white" }} variant="playfair">
                  Sign In
                </Typography>
              </>
            }
            subheader={
              <Typography sx={{ color: "white" }} variant="playfair">
                We are currently only providing signing in with your Google
                Account. We plan to expand to more sign up options in the
                future.
              </Typography>
            }
          />
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
            onlyThirdPartyProviders
          />
        </Card>
      </Stack>
    </main>
  );
}
