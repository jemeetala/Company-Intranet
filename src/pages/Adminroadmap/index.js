import React from "react";

import { Column, Stack, Row, SelectBox, Img, Text, Line } from "components";
import Header2 from "components/Header/Header2";

const AdminroadmapPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] lg:pb-[436px] xl:pb-[546px] 2xl:pb-[614px] 3xl:pb-[737px] w-[100%]">
        <Header2 className="w-[100%]" />
        <Stack className="xl:h-[111px] 2xl:h-[124px] 3xl:h-[149px] lg:h-[88px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
          <Column className="absolute bottom-[1%] items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start pt-[2px] w-[100%]">
                <Row className="items-start justify-between w-[97%]">
                  <Row className="items-start justify-between w-[94%]">
                    <Row className="items-start justify-evenly w-[12%]">
                      <SelectBox
                        className="font-normal lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[87%]"
                        placeholderClassName="text-bluegray_900"
                        name="GroupFourteen"
                        placeholder="New Roadmap 1"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_24X24.svg"
                            className="mr-[0] lg:w-[12px] lg:h-[13px] xl:w-[16px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[19px] 3xl:w-[21px] 3xl:h-[22px]"
                            alt="arrow_down"
                          />
                        }
                        size="md"
                      ></SelectBox>
                      <Img
                        src="images/img_bag.svg"
                        className="bookmark"
                        alt="bag"
                      />
                    </Row>
                    <Row className="items-end mt-[2px] w-[9%]">
                      <Img
                        src="images/img_edit_20X20.svg"
                        className="plus"
                        alt="edit"
                      />
                      <Text className="rowedit" variant="body1">
                        CREATE NEW POST
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-start mt-[2px] w-[5%]">
                    <Img
                      src="images/img_search.svg"
                      className="plus"
                      alt="search"
                    />
                    <Text className="rowsearch" variant="body1">
                      SEARCH
                    </Text>
                  </Row>
                </Row>
                <Line className="bg-gray_402 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
              </Column>
              <Row className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]">
                <Text
                  className="font-normal mt-[1px] text-bluegray_401 w-[auto]"
                  variant="body1"
                >
                  POSTS (0)
                </Text>
                <Text
                  className="font-normal lg:ml-[557px] xl:ml-[697px] 2xl:ml-[784px] 3xl:ml-[941px] mt-[4px] text-bluegray_401 w-[auto]"
                  variant="body1"
                >
                  STATUS
                </Text>
                <Text className="OWNER" variant="body1">
                  OWNER
                </Text>
                <Text className="OWNER" variant="body1">
                  ETA
                </Text>
                <Text className="OWNER" variant="body1">
                  CATEGORY
                </Text>
                <Text className="OWNER" variant="body1">
                  VOTES
                </Text>
                <Text className="OWNER" variant="body1">
                  IMPACT
                </Text>
                <Text
                  className="font-normal lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] mt-[4px] text-bluegray_401 w-[auto]"
                  variant="body1"
                >
                  EFFORT
                </Text>
                <Row className="items-center justify-between lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] w-[6%]">
                  <SelectBox
                    className="font-normal pb-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_401 w-[65%]"
                    placeholderClassName="text-bluegray_401"
                    name="Group306"
                    placeholder="SCORE"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_24X24.svg"
                        className="mr-[0] lg:w-[10px] lg:h-[11px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px]"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></SelectBox>
                  <Img
                    src="images/img_settings.svg"
                    className="plus"
                    alt="settings"
                  />
                </Row>
              </Row>
            </Column>
            <Row className="bg-white_A700 border border-gray_402 border-solid items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
              <Img
                src="images/img_plus_20X20.svg"
                className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] plus"
                alt="plus"
              />
              <Text
                className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-bluegray_401 w-[auto]"
                variant="body1"
              >
                Create new post
              </Text>
            </Row>
          </Column>
          <Line className="absolute bg-gray_402 bottom-[1%] 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] right-[41%] w-[1px]" />
          <Line className="absolute bg-gray_402 bottom-[0] 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] right-[8%] w-[1px]" />
          <Line className="absolute bg-gray_402 bottom-[0] lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] right-[14%] w-[1px]" />
          <Line className="absolute bg-gray_402 bottom-[0] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] right-[20%] w-[1px]" />
        </Stack>
      </Column>
    </>
  );
};

export default AdminroadmapPage;
