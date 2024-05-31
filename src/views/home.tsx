import { Container, Flex } from "styled-system/jsx";
import { Accordion, Alert, DatePicker, Portal } from "~/components";
import { Button } from "~/components/ui/button";
import { m } from "~/i18n/m";
export const Home = () => {
  return (
    <Container>
      <h1>{m.test()}</h1>
      <p>This is the landing page.</p>
      <Button
        variant={"jason"}
        onClick={() => {
          alert("clcik");
        }}
      >
        Get Started
      </Button>
      <Accordion.Root defaultValue={["React"]}>
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
        <DatePicker.Root>
          <DatePicker.Label>Label</DatePicker.Label>
          <DatePicker.Control>
            <DatePicker.Input />
            <DatePicker.Trigger>📅</DatePicker.Trigger>
            <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
          </DatePicker.Control>
          <Portal>
            <DatePicker.Positioner>
              <DatePicker.Content>
                <DatePicker.YearSelect />
                <DatePicker.MonthSelect />
                <DatePicker.View view="day">
                  <DatePicker.Context>
                    {(datePicker) => (
                      <>
                        <DatePicker.ViewControl>
                          <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                          <DatePicker.ViewTrigger>
                            <DatePicker.RangeText />
                          </DatePicker.ViewTrigger>
                          <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                        </DatePicker.ViewControl>
                        <DatePicker.Table>
                          <DatePicker.TableHead>
                            <DatePicker.TableRow>
                              {datePicker.weekDays.map((weekDay, id) => (
                                <DatePicker.TableHeader key={id}>
                                  {weekDay.short}
                                </DatePicker.TableHeader>
                              ))}
                            </DatePicker.TableRow>
                          </DatePicker.TableHead>
                          <DatePicker.TableBody>
                            {datePicker.weeks.map((week, id) => (
                              <DatePicker.TableRow key={id}>
                                {week.map((day, id) => (
                                  <DatePicker.TableCell key={id} value={day}>
                                    <DatePicker.TableCellTrigger>
                                      {day.day}
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
                    {(datePicker) => (
                      <>
                        <DatePicker.ViewControl>
                          <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                          <DatePicker.ViewTrigger>
                            <DatePicker.RangeText />
                          </DatePicker.ViewTrigger>
                          <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                        </DatePicker.ViewControl>
                        <DatePicker.Table>
                          <DatePicker.TableBody>
                            {datePicker
                              .getMonthsGrid({ columns: 4, format: "short" })
                              .map((months, id) => (
                                <DatePicker.TableRow key={id}>
                                  {months.map((month, id) => (
                                    <DatePicker.TableCell
                                      key={id}
                                      value={month.value}
                                    >
                                      <DatePicker.TableCellTrigger>
                                        {month.label}
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
                    {(datePicker) => (
                      <>
                        <DatePicker.ViewControl>
                          <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                          <DatePicker.ViewTrigger>
                            <DatePicker.RangeText />
                          </DatePicker.ViewTrigger>
                          <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                        </DatePicker.ViewControl>
                        <DatePicker.Table>
                          <DatePicker.TableBody>
                            {datePicker
                              .getYearsGrid({ columns: 4 })
                              .map((years, id) => (
                                <DatePicker.TableRow key={id}>
                                  {years.map((year, id) => (
                                    <DatePicker.TableCell
                                      key={id}
                                      value={year.value}
                                    >
                                      <DatePicker.TableCellTrigger>
                                        {year.label}
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
          </Portal>
        </DatePicker.Root>
      </Flex>
    </Container>
  );
};
