import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack } from "components";

const AdminchangelogPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-indigo_A200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
              <Img
                src="images/img_question.svg"
                className="question"
                alt="question"
              />
              <Row className="items-center justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[20%]">
                <Text
                  className="hover:font-medium rowfeedback"
                  as="h5"
                  variant="h5"
                >
                  Feedback
                </Text>
                <Text
                  className="hover:font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rowfeedback"
                  as="h5"
                  variant="h5"
                >
                  Roadmap
                </Text>
                <Text
                  className="hover:font-medium lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rowfeedback"
                  as="h5"
                  variant="h5"
                >
                  Users
                </Text>
                <Button
                  className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[26%]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="FillIndigo500"
                >
                  Changelog
                </Button>
              </Row>
              <Button
                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:ml-[1041px] lg:ml-[616px] xl:ml-[771px] 2xl:ml-[867px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                size="mdIcn"
                variant="icbFillWhiteA70033"
              >
                <Img
                  src="images/img_eye.svg"
                  className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                  alt="eye"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                size="mdIcn"
                variant="icbFillWhiteA70033"
              >
                <Img
                  src="images/img_lightening.svg"
                  className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                  alt="Lightening"
                />
              </Button>
              <Button
                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                size="mdIcn"
                variant="icbFillWhiteA70033"
              >
                <Img
                  src="images/img_eye_40X40.svg"
                  className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                  alt="eye One"
                />
              </Button>
              <Text className="TopNav" as="h4" variant="h4">
                K
              </Text>
            </Row>
          </header>
          <Row className="items-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[80%]">
            <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] pr-[3px] pt-[3px] w-[18%]">
              <Row className="items-center w-[93%]">
                <Text className="Status" variant="body1">
                  Linked posts
                </Text>
                <Text className="3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[93px] Reset">
                  Search
                </Text>
              </Row>
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[31%]">
                <Text
                  className="font-normal text-bluegray_900 w-[auto]"
                  variant="body1"
                >
                  Status
                </Text>
                <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Row className="items-start w-[63%]">
                    <Button
                      className="flex items-center justify-center plus"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineBluegray100"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="checkmark"
                      />
                    </Button>
                    <Text className="rowplus" variant="body1">
                      New
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                    <Img
                      src="images/img_file.svg"
                      className="plus"
                      alt="file"
                    />
                    <Text className="rowcheckmark1" variant="body1">
                      Improved
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[70%]">
                    <Img
                      src="images/img_file.svg"
                      className="plus"
                      alt="file One"
                    />
                    <Text className="rowplus" variant="body1">
                      Fixed
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Row className="items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[93%]">
                <Text className="rowusersegment" variant="body1">
                  Labels
                </Text>
                <Img
                  src="images/img_settings.svg"
                  className="lg:ml-[105px] xl:ml-[132px] 2xl:ml-[148px] 3xl:ml-[178px] settings"
                  alt="settings"
                />
              </Row>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[41%]">
              <Text
                className="font-normal ml-[3px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                <span className="text-bluegray_900 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Entry Title{" "}
                </span>
                <span className="text-bluegray_300 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  (draft)
                </span>
              </Text>
              <Button
                className="font-normal lg:mb-[472px] xl:mb-[590px] 2xl:mb-[664px] 3xl:mb-[796px] ml-[3px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[8%]"
                shape="RoundedBorder6"
                size="sm"
                variant="FillGreen400"
              >
                NEW
              </Button>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-end lg:pt-[14px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] w-[41%]">
              <Column className="items-center justify-start w-[92%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="font-normal text-bluegray_400 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Entry Title
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
                </Column>
                <Stack className="lg:h-[430px] xl:h-[538px] 2xl:h-[605px] 3xl:h-[726px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="absolute bg-gray_102 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] top-[0] w-[100%]">
                    <Row className="items-center justify-between ml-[4px] w-[18%]">
                      <Img
                        src="images/img_settings_24X24.svg"
                        className="bookmark"
                        alt="settings One"
                      />
                      <Img
                        src="images/img_file_24X24.svg"
                        className="bookmark"
                        alt="file Two"
                      />
                      <Img
                        src="images/img_info.svg"
                        className="bookmark"
                        alt="info"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[25%]">
                      <Img
                        src="images/img_link.svg"
                        className="bookmark"
                        alt="link"
                      />
                      <Img
                        src="images/img_rewind.svg"
                        className="rewind"
                        alt="rewind"
                      />
                      <Img
                        src="images/img_menu_24X24.svg"
                        className="rewind"
                        alt="menu"
                      />
                      <Img
                        src="images/img_settings_1.svg"
                        className="rewind"
                        alt="settings Two"
                      />
                    </Row>
                    <Row className="items-center justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[11%]">
                      <Img
                        src="images/img_location.svg"
                        className="bookmark"
                        alt="location"
                      />
                      <Img
                        src="images/img_play.svg"
                        className="rewind"
                        alt="play"
                      />
                    </Row>
                  </Row>
                  <Column className="absolute border border-bluegray_100 border-solid justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                    <Text
                      className="font-normal lg:mb-[386px] xl:mb-[483px] 2xl:mb-[543px] 3xl:mb-[651px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic text-gray_502 w-[auto]"
                      variant="body1"
                    >
                      Share recent product changes. Markdown supported.
                    </Text>
                  </Column>
                </Stack>
              </Column>
              <Row className="border border-bluegray_100 border-solid font-gilroy items-center justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                <Button
                  className="font-semibold lg:ml-[231px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[20%]"
                  shape="CustomBorderTL4"
                  size="md"
                  variant="FillIndigo100"
                >
                  PUBLISH NOW
                </Button>
                <Stack className="bg-indigo_100 border border-solid border-white_A700 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mr-[1px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] w-[5%]">
                  <Img
                    src="images/img_calendar.svg"
                    className="absolute inset-[0] justify-center m-[auto] question_One"
                    alt="calendar"
                  />
                </Stack>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default AdminchangelogPage;
