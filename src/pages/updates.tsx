import React from "react";
import Layout from "@Components/Layout";
import SEO from "@Components/SEO";
import { Box, CardBox, Text, Title2 } from "@Components/Layout/elements";

const Updates = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Aggiornamenti" path="/updates/" />

      <Box py="huge">
        <Title2 mb="large">Aggiornamento dati</Title2>

        <CardBox px={["mid", "large"]} py={["large", "xlarge"]}>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            18/03/2020 — Dati Regione Campania non pervenuti.
          </Text>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            18/03/2020 — Dati Provincia di Parma non pervenuti.
          </Text>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            17/03/2020 — Dati Provincia di Rimini non aggiornati.
          </Text>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            16/03/2020 — Dati P.A. Trento e Puglia non pervenuti.
          </Text>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            11/03/2020 — Dati Regione Abruzzo non pervenuti.
          </Text>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            10/03/2020 — Dati Regione Lombardia parziali.
          </Text>
          <Text fontSize={3} fontWeight={700} color="neutral300" py="small">
            07/03/2020 — Dati Brescia +300 esiti positivi
          </Text>
        </CardBox>
      </Box>
    </Layout>
  );
};

export default Updates;
