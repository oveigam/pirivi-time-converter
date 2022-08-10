import { Button, Container, Stack, Text, Title, Tooltip } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons";
import dayjs from "dayjs";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import canvioHora from "../util/canvioHora";
import getTzOffset from "../util/getTzOffset";

import badPic from "../assets/bad.png";

const Home: NextPage = () => {
  const [hora, setHora] = useState<Date | null>(null);
  const [horaPirivi, setHoraPirivi] = useState<string | null>(null);

  return (
    <Container size="md" py={50}>
      <Stack spacing="xl" align="center">
        <Title order={1} align="center">
          Pirivi Time Converter
        </Title>
        <Title order={4} align="center">
          Tu zona horaria es
          <Text color="blue" inherit component="span">
            {" " + getTzOffset() + " "}
          </Text>
          <Text color="dimmed" inherit component="span">
            {"(" + dayjs.tz.guess() + ")"}
          </Text>
        </Title>
        <TimeInput
          label="A que hora quedaste con Pirivi?"
          icon={<IconClock size={16} />}
          value={hora}
          onChange={(date) => setHora(date)}
        />
        <Stack align="center" spacing={5}>
          <Tooltip label="Cuando le Salga de la Polla a Pirivi Time">
            <Button
              disabled={!hora}
              onClick={() => setHoraPirivi(canvioHora(hora))}
            >
              Convertir a CSPPT
            </Button>
          </Tooltip>
          <Text size="sm" color="dimmed">
            (Cuando le Salga de la Polla a Pirivi Time)
          </Text>
        </Stack>
        {!!horaPirivi && (
          <Stack mt="xl" align="center">
            <Title order={4} align="center">
              Hora estimada de llegada
              <Text color="blue" inherit component="span">
                {" " + horaPirivi}
              </Text>
            </Title>
            <Image src={badPic} layout="fixed" width={241} height={207} />
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Home;
