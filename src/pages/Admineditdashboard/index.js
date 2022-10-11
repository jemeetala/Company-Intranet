import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Img,
  SelectBox,
  List,
  Line,
  Button,
} from "components";
import Header1 from "components/Header/Header1";

const AdmineditdashboardPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] lg:pb-[171px] xl:pb-[214px] 2xl:pb-[241px] 3xl:pb-[289px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[48%]">
            <Stack className="lg:h-[273px] xl:h-[341px] 2xl:h-[384px] 3xl:h-[461px] w-[100%]">
              <Stack className="absolute lg:h-[273px] xl:h-[341px] 2xl:h-[384px] 3xl:h-[461px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-bluegray_50 border-solid bottom-[0] items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] right-[0] rounded-radius8 w-[48%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="rownewposts" as="h3" variant="h3">
                      Stale posts
                    </Text>
                    <Img
                      src="images/img_question_16X16.svg"
                      className="question_One"
                      alt="question One"
                    />
                  </Row>
                  <Column className="items-center justify-start lg:mb-[50px] xl:mb-[63px] 2xl:mb-[71px] 3xl:mb-[85px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[56%]">
                    <Img
                      src="images/img_group230.svg"
                      className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      alt="Group230"
                    />
                    <Text className="columngroup230" as="h5" variant="h5">
                      none of your posts are stale.
                    </Text>
                  </Column>
                </Column>
                <Stack className="absolute lg:h-[183px] xl:h-[229px] 2xl:h-[257px] 3xl:h-[308px] top-[0] w-[100%]">
                  <Column className="absolute bg-white_A700 border border-bluegray_50 border-solid items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 top-[0] w-[100%]">
                    <Row className="items-end justify-between w-[99%]">
                      <Text className="rowactivityovervi" as="h3" variant="h3">
                        Activity overview
                      </Text>
                      <SelectBox
                        className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[21%]"
                        placeholderClassName="text-bluegray_700"
                        name="Dropdown"
                        placeholder="This Week"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="lg:w-[10px] lg:h-[11px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[5px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[7px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder4"
                        variant="OutlineBluegray50"
                      ></SelectBox>
                    </Row>
                    <Row className="items-center justify-between lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[98%]">
                      <List
                        className="lg:gap-[12px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] grid grid-cols-2 min-h-[auto] w-[49%]"
                        orientation="horizontal"
                      >
                        <Column className="listposts">
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Posts
                            </Text>
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              0
                            </Text>
                          </Row>
                          <Line className="bg-gray_300 h-[2px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                        </Column>
                        <Column className="listposts">
                          <Row className="items-center justify-between w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Votes
                            </Text>
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              0
                            </Text>
                          </Row>
                          <Line className="bg-gray_300 h-[2px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]" />
                        </Column>
                      </List>
                      <Column className="items-center pt-[3px] w-[23%]">
                        <Row className="items-center justify-between w-[99%]">
                          <Text
                            className="font-medium text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Comments
                          </Text>
                          <Text
                            className="font-bold text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1
                          </Text>
                        </Row>
                        <Stack
                          className="bg-cover bg-repeat lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group2.svg')",
                          }}
                        >
                          <Img
                            src="images/img_line5.svg"
                            className="absolute lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]"
                            alt="LineFive Two"
                          />
                        </Stack>
                      </Column>
                      <Column className="items-center pt-[3px] w-[23%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text
                            className="font-medium mt-[2px] text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            Status Changes
                          </Text>
                          <Text
                            className="font-bold mb-[2px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            0
                          </Text>
                        </Row>
                        <Line className="bg-gray_300 h-[2px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]" />
                      </Column>
                    </Row>
                  </Column>
                  <Column className="absolute bg-white_A700 border border-bluegray_50 border-solid bottom-[0] justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] right-[2%] rounded-radius4 shadow-bs1 w-[30%]">
                    <Column className="justify-start mt-[3px] w-[83%]">
                      <Text
                        className="font-normal text-bluegray_700 w-[auto]"
                        variant="body1"
                      >
                        Relative dates
                      </Text>
                      <Row className="items-center ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[93%]">
                        <Text
                          className="font-normal mb-[1px] not-italic text-indigo_A200 w-[auto]"
                          variant="body1"
                        >
                          This week
                        </Text>
                        <Text
                          className="lg:ml-[28px] xl:ml-[36px] 2xl:ml-[40px] 3xl:ml-[48px] Publiclink"
                          variant="body1"
                        >
                          Last week
                        </Text>
                      </Row>
                      <Row className="items-center justify-between ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[97%]">
                        <Text className="Category" variant="body1">
                          This month
                        </Text>
                        <Text className="Publiclink" variant="body1">
                          Last month
                        </Text>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                        <Text className="Category" variant="body1">
                          This quarter
                        </Text>
                        <Text className="Publiclink" variant="body1">
                          Last quarter
                        </Text>
                      </Row>
                      <Row className="items-center ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[88%]">
                        <Text className="Accountcreated" variant="body1">
                          This half
                        </Text>
                        <Text
                          className="lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] Accountcreated"
                          variant="body1"
                        >
                          Last half
                        </Text>
                      </Row>
                      <Text
                        className="ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] Accountcreated"
                        variant="body1"
                      >
                        All Time
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[100%]">
                      <Text
                        className="font-normal text-bluegray_700 w-[auto]"
                        variant="body1"
                      >
                        Fixed dates
                      </Text>
                      <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius4 w-[100%]">
                        <Button
                          className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                          shape="RoundedBorder6"
                          size="md"
                          variant="OutlineBluegray50"
                        >
                          mm/dd/yyyy
                        </Button>
                        <Text className="Accountcreated" variant="body1">
                          _
                        </Text>
                        <Button
                          className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                          shape="RoundedBorder6"
                          size="md"
                          variant="OutlineBluegray50"
                        >
                          mm/dd/yyyy
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Stack>
              <Column className="absolute bg-white_A700 border border-bluegray_50 border-solid bottom-[0] justify-end left-[0] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[48%]">
                <Row className="items-start justify-between ml-[4px] mt-[4px] w-[98%]">
                  <Text className="rownewposts" as="h3" variant="h3">
                    New posts
                  </Text>
                  <Img
                    src="images/img_question_16X16.svg"
                    className="question_One"
                    alt="question Two"
                  />
                </Row>
                <Column className="justify-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[44%]">
                  <Row className="items-center w-[100%]">
                    <Column className="border border-bluegray_50 border-solid items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[27%]">
                      <Img
                        src="images/img_polygon2.svg"
                        className="PolygonTwo"
                        alt="PolygonTwo"
                      />
                      <Text className="columnpolygontwo" as="h5" variant="h5">
                        1
                      </Text>
                    </Column>
                    <Text className="rowpolygontwo" as="h5" variant="h5">
                      feature request
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[60%]">
                    <Column className="border border-bluegray_50 border-solid items-center justify-start mt-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[46%]">
                      <Img
                        src="images/img_polygon2.svg"
                        className="PolygonTwo"
                        alt="PolygonTwo One"
                      />
                      <Text className="columnpolygontwo" as="h5" variant="h5">
                        1
                      </Text>
                    </Column>
                    <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[47%]">
                      <Text
                        className="font-normal text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        f1
                      </Text>
                      <Text
                        className="font-bold xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] text-red_700 w-[auto]"
                        variant="body2"
                      >
                        CLOSED
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[92%]">
                    <Column className="border border-bluegray_50 border-solid items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[30%]">
                      <Img
                        src="images/img_polygon2.svg"
                        className="PolygonTwo"
                        alt="PolygonTwo Two"
                      />
                      <Text className="columnpolygontwo" as="h5" variant="h5">
                        1
                      </Text>
                    </Column>
                    <Text className="rowpolygontwo" as="h5" variant="h5">
                      nest Function
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <List
              className="lg:gap-[17px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
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

export default AdmineditdashboardPage;
