import React from "react";

import { Column, Stack, Row, SelectBox, Img, Text, Line } from "components";
import Header2 from "components/Header/Header2";

const AdmineditroadmapPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] lg:pb-[382px] xl:pb-[478px] 2xl:pb-[538px] 3xl:pb-[645px] w-[100%]">
        <Header2 className="w-[100%]" />
        <Stack className="lg:h-[143px] xl:h-[179px] 2xl:h-[201px] 3xl:h-[241px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Column className="items-center justify-start pt-[2px] w-[100%]">
              <Row className="items-start justify-between w-[97%]">
                <Row className="items-start justify-between w-[94%]">
                  <Row className="items-start justify-evenly w-[12%]">
                    <SelectBox
                      className="font-normal lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900 w-[87%]"
                      placeholderClassName="text-bluegray_900"
                      name="GroupNine"
                      placeholder="New Roadmap 2"
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
            <Stack className="xl:h-[109px] 2xl:h-[123px] 3xl:h-[147px] lg:h-[87px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
              <Row className="absolute bg-white_A700 border border-gray_402 border-solid items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] top-[0] w-[100%]">
                <Row className="items-end justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[8%]">
                  <Img
                    src="images/img_plus_20X20.svg"
                    className="plus"
                    alt="plus"
                  />
                  <Text
                    className="font-medium mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] text-bluegray_401 w-[auto]"
                    variant="body1"
                  >
                    Add post by Title...
                  </Text>
                </Row>
                <Text
                  className="font-medium lg:ml-[423px] xl:ml-[529px] 2xl:ml-[595px] 3xl:ml-[715px] text-bluegray_401 w-[auto]"
                  variant="body1"
                >
                  In
                </Text>
              </Row>
              <Column className="absolute bottom-[0] items-center justify-start right-[41%] w-[7%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius6 w-[100%]">
                  <SelectBox
                    className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[86%]"
                    placeholderClassName="text-bluegray_700"
                    name="Frame406"
                    placeholder="hello world"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_20X20.svg"
                        className="mr-[0] lg:w-[10px] lg:h-[11px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_50 border-solid justify-start mt-[4px] p-[4px] rounded-radius8 shadow-bs w-[100%]">
                  <Text
                    className="border border-indigo_A200 border-solid font-normal not-italic lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] lg:pr-[18px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius2 text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Request
                  </Text>
                  <Text
                    className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    hello world
                  </Text>
                  <Text
                    className="font-normal mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Feedback
                  </Text>
                </Column>
              </Column>
              <Line className="absolute bg-gray_402 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] right-[14%] top-[1%] w-[1px]" />
              <Line className="absolute bg-gray_402 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] right-[20%] top-[0] w-[1px]" />
            </Stack>
          </Column>
          <Row className="absolute items-center justify-between right-[8%] top-[16%] w-[33%]">
            <Line className="bg-gray_402 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] mb-[1px] w-[1px]" />
            <Line className="bg-gray_402 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] mt-[1px] w-[1px]" />
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default AdmineditroadmapPage;
