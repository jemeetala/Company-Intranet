import React from "react";

import { Column, Row, Text, Button, Img, Line, Input, List } from "components";

const ScreenThirteenPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] w-[100%]">
        <header className="w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[48%]">
              <Row className="items-center w-[100%]">
                <Text
                  className="font-normal text-bluegray_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  DhIWIse
                </Text>
                <Button
                  className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[395px] xl:ml-[495px] 2xl:ml-[556px] 3xl:ml-[668px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
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
                  className="bg-purple_200 flex font-medium items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[9px] rounded-radius50 text-white_A700 w-[40px]"
                  as="h4"
                  variant="h4"
                >
                  K
                </Text>
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
        <Column className="items-center justify-start lg:mb-[222px] xl:mb-[278px] 2xl:mb-[313px] 3xl:mb-[376px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[48%]">
          <Row className="items-end justify-between lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[100%]">
            <Column className="justify-start w-[32%]">
              <Text
                className="font-medium text-bluegray_402 w-[auto]"
                variant="body1"
              >
                Give Feedback
              </Text>
              <Row className="bg-gray_103 items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[100%]">
                <Text className="InputPlaceho_Two" variant="body1">
                  Smart Editor Feedback
                </Text>
                <Text
                  className="font-normal text-bluegray_400 w-[auto]"
                  variant="body2"
                >
                  2
                </Text>
              </Row>
            </Column>
            <Row className="bg-gray_103 items-center mb-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[32%]">
              <Text className="InputPlaceho_Two" variant="body1">
                Product Feedback
              </Text>
              <Text
                className="font-normal 3xl:ml-[117px] lg:ml-[69px] xl:ml-[86px] 2xl:ml-[97px] text-bluegray_400 w-[auto]"
                variant="body2"
              >
                42
              </Text>
            </Row>
            <Input
              className="font-normal p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
              wrapClassName="2xl:mt-[17px] 3xl:mt-[20px] lg:mt-[12px] mb-[1px] w-[32%] xl:mt-[15px]"
              name="InputField"
              placeholder="DhIWIse Insider Forum"
              size="lg"
              variant="FillGray103"
            ></Input>
          </Row>
          <Column className="justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
            <Text
              className="font-medium text-bluegray_402 w-[auto]"
              variant="body1"
            >
              Roadmap
            </Text>
            <Row className="items-start justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
              <Column className="bg-gray_103 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius8 w-[31%]">
                <Row className="items-center mr-[auto] mt-[3px] w-[41%]">
                  <div className="bg-blue_A200 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] rounded-radius50 lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
                  <Text className="rowpolygontwo" as="h3" variant="h3">
                    Planned
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[95%]"
                  orientation="vertical"
                >
                  <Row className="listpolygontwo">
                    <Column className="bg-white_A700 border-bluegray_100 border-bw086 border-solid items-center justify-end lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[19%]">
                      <Img
                        src="images/img_polygon2_7X15.svg"
                        className="PolygonTwo2"
                        alt="PolygonTwo"
                      />
                      <Text className="columnpolygontwo2" variant="body1">
                        3
                      </Text>
                    </Column>
                    <Column className="justify-start mt-[4px] w-[74%]">
                      <Text className="Listofpossibl" variant="body1">
                        List of possible items for
                        <br />
                        Change view.
                      </Text>
                      <Text className="SMARTEDITORFE" variant="body2">
                        SMART EDITOR FEEDBACK
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listpolygontwo">
                    <Column className="bg-white_A700 border-bluegray_100 border-bw086 border-solid items-center justify-end lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[19%]">
                      <Img
                        src="images/img_polygon2_7X15.svg"
                        className="PolygonTwo2"
                        alt="PolygonTwo One"
                      />
                      <Text className="columnpolygontwo2" variant="body1">
                        4
                      </Text>
                    </Column>
                    <Column className="justify-start mt-[2px] w-[74%]">
                      <Text
                        className="font-normal text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        Need for more shortcuts
                      </Text>
                      <Text
                        className="font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-bluegray_301 w-[auto]"
                        variant="body2"
                      >
                        SMART EDITOR FEEDBACK
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[97%]">
                    <Column className="bg-white_A700 border-bluegray_100 border-bw086 border-solid items-center justify-end lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[19%]">
                      <Img
                        src="images/img_polygon2_1.svg"
                        className="PolygonTwo2"
                        alt="PolygonTwo Two"
                      />
                      <Text className="columnpolygontwo2" variant="body1">
                        1
                      </Text>
                    </Column>
                    <Column className="justify-start mt-[4px] w-[73%]">
                      <Text className="Listofpossibl" variant="body1">
                        FLUTTER : API Call wIth
                        <br />
                        OAuth Is not supported
                      </Text>
                      <Text className="SMARTEDITORFE" variant="body2">
                        PRODUCT FEEDBACK
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
              <Column className="bg-gray_103 border border-bluegray_50 border-solid justify-center lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius8 w-[31%]">
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
              <Column className="bg-gray_103 border border-bluegray_50 border-solid justify-end lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius8 w-[31%]">
                <Row className="items-start mr-[auto] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[53%]">
                  <div className="bg-light_green_A700 3xl:h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] mt-[2px] rounded-radius50 lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
                  <Text className="rowpolygontwo" as="h3" variant="h3">
                    Completed
                  </Text>
                </Row>
                <Row className="items-start mr-[auto] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[93%]">
                  <Column className="bg-white_A700 border-bluegray_100 border-bw086 border-solid items-center justify-end lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[19%]">
                    <Img
                      src="images/img_polygon2_1.svg"
                      className="PolygonTwo2"
                      alt="PolygonThree"
                    />
                    <Text className="columnpolygontwo2" variant="body1">
                      1
                    </Text>
                  </Column>
                  <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[4px] w-[74%]">
                    <Text className="Listofpossibl" variant="body1">
                      on API success always
                      <br />
                      match status code 200.
                    </Text>
                    <Text
                      className="font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-bluegray_301 w-[auto]"
                      variant="body2"
                    >
                      PRODUCT FEEDBACK
                    </Text>
                  </Column>
                </Row>
                <Row className="items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[98%]">
                  <Column className="bg-white_A700 border-bluegray_100 border-bw086 border-solid items-center justify-end lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[18%]">
                    <Img
                      src="images/img_polygon2_1.svg"
                      className="PolygonTwo2"
                      alt="PolygonTwo Three"
                    />
                    <Text className="columnpolygontwo2" variant="body1">
                      2
                    </Text>
                  </Column>
                  <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[4px] w-[75%]">
                    <Text className="Listofpossibl" variant="body1">
                      When Multiple host are
                      <br />
                      used in api integration
                      <br />
                      then wrong url generated
                      <br />
                      for api call
                    </Text>
                    <Text className="SMARTEDITORFE" variant="body2">
                      PRODUCT FEEDBACK
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default ScreenThirteenPage;
