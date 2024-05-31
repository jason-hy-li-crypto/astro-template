import { Ticket } from "@cronos-app/icons/src";
import { currentWallet } from "@cronos-app/wallet";
import { Container, Flex } from "styled-system/jsx";
import { Accordion, Alert, DatePicker, Portal } from "~/components";
import { Button } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";
import { IconButton } from "~/components/ui/icon-button";
import { Input } from "~/components/ui/input";
import { m } from "~/i18n/m";

export const Home = () => {
  const isConnected = currentWallet.useIsConnected();
  return (
    <Container>
      {isConnected ? (
        <Button
          variant={"ghost"}
          onClick={() => {
            currentWallet.disconnect();
          }}
        >
          Disconnect
        </Button>
      ) : (
        <Button onClick={() => currentWallet.connect()}>Connect</Button>
      )}

      <h1>{m.test()}</h1>
      <p>This is the landing page.</p>
      <Button
        variant={"jason"}
        onClick={() => {
          alert("clcik");
        }}
      >
        Get Started
        <Icon>
          <Ticket />
        </Icon>
      </Button>
      <Accordion.Root defaultValue={["React"]} multiple>
        {["React", "Solid", "Vue"].map((item) => (
          <Accordion.Item key={item} value={item}>
            <Accordion.ItemTrigger>
              {item}
              <Accordion.ItemIndicator>+</Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              {item} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <Alert.Root>
        <Alert.Icon>+</Alert.Icon>
        <Alert.Title>Browser Update available</Alert.Title>
      </Alert.Root>
      <Flex>
        <DatePicker.Root
          positioning={{ sameWidth: true }}
          startOfWeek={1}
          selectionMode="range"
        >
          <DatePicker.Label>Date Picker</DatePicker.Label>
          <DatePicker.Control>
            <DatePicker.Input index={0} asChild>
              <Input />
            </DatePicker.Input>
            <DatePicker.Input index={1} asChild>
              <Input />
            </DatePicker.Input>
            <DatePicker.Trigger asChild>
              <IconButton variant="outline" aria-label="Open date picker">
                🗓️
              </IconButton>
            </DatePicker.Trigger>
          </DatePicker.Control>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.View view="day">
                <DatePicker.Context>
                  {(api) => (
                    <>
                      <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger asChild>
                          <IconButton variant="ghost" size="sm">
                            {"<"}
                          </IconButton>
                        </DatePicker.PrevTrigger>
                        <DatePicker.ViewTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <DatePicker.RangeText />
                          </Button>
                        </DatePicker.ViewTrigger>
                        <DatePicker.NextTrigger asChild>
                          <IconButton variant="ghost" size="sm">
                            {">"}
                          </IconButton>
                        </DatePicker.NextTrigger>
                      </DatePicker.ViewControl>
                      <DatePicker.Table>
                        <DatePicker.TableHead>
                          <DatePicker.TableRow>
                            {api.weekDays.map((weekDay, id) => (
                              <DatePicker.TableHeader key={id}>
                                {weekDay.narrow}
                              </DatePicker.TableHeader>
                            ))}
                          </DatePicker.TableRow>
                        </DatePicker.TableHead>
                        <DatePicker.TableBody>
                          {api.weeks.map((week, id) => (
                            <DatePicker.TableRow key={id}>
                              {week.map((day, id) => (
                                <DatePicker.TableCell key={id} value={day}>
                                  <DatePicker.TableCellTrigger asChild>
                                    <IconButton variant="ghost">
                                      {day.day}
                                    </IconButton>
                                  </DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                        </DatePicker.TableBody>
                      </DatePicker.Table>
                    </>
                  )}
                </DatePicker.Context>
              </DatePicker.View>
              <DatePicker.View view="month">
                <DatePicker.Context>
                  {(api) => (
                    <>
                      <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger asChild>
                          <IconButton variant="ghost" size="sm">
                            {"<"}
                          </IconButton>
                        </DatePicker.PrevTrigger>
                        <DatePicker.ViewTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <DatePicker.RangeText />
                          </Button>
                        </DatePicker.ViewTrigger>
                        <DatePicker.NextTrigger asChild>
                          <IconButton variant="ghost" size="sm">
                            {">"}
                          </IconButton>
                        </DatePicker.NextTrigger>
                      </DatePicker.ViewControl>
                      <DatePicker.Table>
                        <DatePicker.TableBody>
                          {api
                            .getMonthsGrid({ columns: 4, format: "short" })
                            .map((months, id) => (
                              <DatePicker.TableRow key={id}>
                                {months.map((month, id) => (
                                  <DatePicker.TableCell
                                    key={id}
                                    value={month.value}
                                  >
                                    <DatePicker.TableCellTrigger asChild>
                                      <Button variant="ghost">
                                        {month.label}
                                      </Button>
                                    </DatePicker.TableCellTrigger>
                                  </DatePicker.TableCell>
                                ))}
                              </DatePicker.TableRow>
                            ))}
                        </DatePicker.TableBody>
                      </DatePicker.Table>
                    </>
                  )}
                </DatePicker.Context>
              </DatePicker.View>
              <DatePicker.View view="year">
                <DatePicker.Context>
                  {(api) => (
                    <>
                      <DatePicker.ViewControl>
                        <DatePicker.PrevTrigger asChild>
                          <IconButton variant="ghost" size="sm">
                            {"<"}
                          </IconButton>
                        </DatePicker.PrevTrigger>
                        <DatePicker.ViewTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <DatePicker.RangeText />
                          </Button>
                        </DatePicker.ViewTrigger>
                        <DatePicker.NextTrigger asChild>
                          <IconButton variant="ghost" size="sm">
                            {">"}
                          </IconButton>
                        </DatePicker.NextTrigger>
                      </DatePicker.ViewControl>
                      <DatePicker.Table>
                        <DatePicker.TableBody>
                          {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                            <DatePicker.TableRow key={id}>
                              {years.map((year, id) => (
                                <DatePicker.TableCell
                                  key={id}
                                  value={year.value}
                                >
                                  <DatePicker.TableCellTrigger asChild>
                                    <Button variant="ghost">
                                      {year.label}
                                    </Button>
                                  </DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                        </DatePicker.TableBody>
                      </DatePicker.Table>
                    </>
                  )}
                </DatePicker.Context>
              </DatePicker.View>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </DatePicker.Root>
      </Flex>
    </Container>
  );
};
