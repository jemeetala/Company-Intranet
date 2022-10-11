import React from "react";

import { Column, Row, Text, Button, Img, Line, Input, List } from "components";

const UserroadmapPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] w-[100%]">
        <header className="w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[48%]">
              <Row className="items-center w-[100%]">
                <Text
                  className="hover:bg-purple_200 cursor-pointer hover:font-normal font-normal hover:justify-center text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  xyz
                </Text>
                <Button
                  className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[330px] xl:ml-[412px] 2xl:ml-[464px] 3xl:ml-[557px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                  size="mdIcn"
                  variant="icbFillGray103"
                >
                  <Img
                    src="images/img_eye_1.svg"
                    className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                    alt="eye"
                  />
                </Button>
                <Text
                  className="bg-purple_200 cursor-pointer flex font-medium hover:font-normal items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 hover:text-bluegray_900 text-white_A700 w-[40px]"
                  as="h4"
                  variant="h4"
                >
                  K
                </Text>
                <Button
                  className="2xl:ml-[12px] 3xl:ml-[14px] flex items-center justify-center lg:ml-[8px] text-center w-[16%] xl:ml-[10px]"
                  rightIcon={
                    <Img
                      src="images/img_upload_16X16.svg"
                      className="text-center lg:w-[8px] lg:h-[9px] lg:ml-[4px] xl:w-[10px] xl:h-[11px] xl:ml-[5px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[6px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[7px]"
                      alt="upload"
                    />
                  }
                  shape="RoundedBorder6"
                  size="lg"
                  variant="FillIndigoA200"
                >
                  <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                    ADMIN VIEW
                  </div>
                </Button>
              </Row>
              <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Row className="items-center justify-between w-[33%]">
                  <Row className="items-end w-[34%]">
                    <Img
                      src="images/img_frame413.svg"
                      className="plus"
                      alt="Frame413"
                    />
                    <Text className="rowframe413" variant="body1">
                      ROADMAP
                    </Text>
                  </Row>
                  <Row className="items-start justify-between w-[54%]">
                    <Img
                      src="images/img_lightbulb_20X20.svg"
                      className="plus"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb" variant="body1">
                      GIVE FEEDBACK
                    </Text>
                    <Img
                      src="images/img_arrowdown_1.svg"
                      className="plus"
                      alt="arrowdown"
                    />
                  </Row>
                </Row>
                <Row className="items-end w-[10%]">
                  <Img
                    src="images/img_search_20X20.svg"
                    className="plus"
                    alt="search"
                  />
                  <Text className="rowsearch2" variant="body1">
                    SEARCH
                  </Text>
                </Row>
              </Row>
            </Column>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
          </Column>
        </header>
        <Column className="items-center justify-start lg:mb-[339px] xl:mb-[424px] 2xl:mb-[478px] 3xl:mb-[573px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[48%]">
          <Row className="items-end justify-between lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[100%]">
            <Column className="justify-start w-[32%]">
              <Text
                className="font-medium text-bluegray_402 w-[auto]"
                variant="body1"
              >
                Give Feedback
              </Text>
              <Row className="bg-gray_103 items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[100%]">
                <Text className="mt-[4px] Status" variant="body1">
                  Request
                </Text>
                <Text
                  className="font-normal text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  2
                </Text>
              </Row>
            </Column>
            <Input
              className="font-normal p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
              wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[12px] mb-[1px] w-[32%] xl:mt-[15px]"
              name="InputField"
              placeholder="hello world"
              size="lg"
              variant="FillGray103"
            ></Input>
            <Row className="bg-gray_103 items-center justify-between mb-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[32%]">
              <Text className="InputPlaceho_Two" variant="body1">
                Feedback
              </Text>
              <Text
                className="font-normal text-bluegray_400 w-[auto]"
                variant="body2"
              >
                4
              </Text>
            </Row>
          </Row>
          <Column className="justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
            <Text
              className="font-medium text-bluegray_402 w-[auto]"
              variant="body1"
            >
              Roadmap
            </Text>
            <List
              className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="listellipsefour">
                <Row className="items-center 2xl:mr-[103px] 3xl:mr-[124px] lg:mr-[73px] xl:mr-[92px] mt-[3px] w-[41%]">
                  <div className="bg-blue_A200 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] rounded-radius50 lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
                  <Text className="rowpolygontwo" as="h3" variant="h3">
                    Planned
                  </Text>
                </Row>
                <Text className="Planned" as="h5" variant="h5">
                  Come back soon!
                </Text>
              </Column>
              <Column className="listellipsefour">
                <Row className="items-start lg:mr-[57px] xl:mr-[72px] 2xl:mr-[81px] 3xl:mr-[97px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[54%]">
                  <div className="bg-purple_A400 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] mt-[2px] rounded-radius50 lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
                  <Text className="rowpolygontwo" as="h3" variant="h3">
                    In Progress
                  </Text>
                </Row>
                <Text className="Inprogress" as="h5" variant="h5">
                  Come back soon!
                </Text>
              </Column>
              <Column className="listellipsefour">
                <Row className="items-start lg:mr-[58px] xl:mr-[73px] 2xl:mr-[82px] 3xl:mr-[99px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[53%]">
                  <div className="bg-light_green_A700 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] mt-[2px] rounded-radius50 lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
                  <Text className="rowpolygontwo" as="h3" variant="h3">
                    Completed
                  </Text>
                </Row>
                <Text className="Inprogress" as="h5" variant="h5">
                  Come back soon!
                </Text>
              </Column>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default UserroadmapPage;
