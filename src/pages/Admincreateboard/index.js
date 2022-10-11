import React from "react";

import { Column, Text, List, Row, Img, Switch, Button } from "components";
import Header1 from "components/Header/Header1";

const AdmincreateboardPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] lg:pb-[169px] xl:pb-[212px] 2xl:pb-[238px] 3xl:pb-[286px] w-[100%]">
        <Header1 className="w-[100%]" />
        <Column className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius4 w-[31%]">
          <Column className="items-center justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[64%]">
            <Text
              className="font-medium text-bluegray_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Create a new board
            </Text>
            <Text
              className="font-medium lg:leading-[11px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] text-bluegray_600 text-center w-[100%]"
              as="h5"
              variant="h5"
            >
              A board Is a place where people can post and
              <br />
              vote on Ideas for a specific topic.
            </Text>
          </Column>
          <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[84%]">
            <List
              className="font-inter gap-[0] min-h-[auto] rounded-radius4 w-[100%]"
              orientation="vertical"
            >
              <Column className="listname">
                <Text className="NAME" variant="body2">
                  NAME
                </Text>
                <Text className="featurerequest" variant="body1">
                  feature requests
                </Text>
              </Column>
              <Column className="listname">
                <Text className="NAME" variant="body2">
                  URL
                </Text>
                <Text className="featurerequest" variant="body1">
                  kajalmorker123.canny.Io/feature-requests
                </Text>
              </Column>
            </List>
            <Column className="font-inter justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
              <Row className="items-start w-[40%]">
                <Text
                  className="font-normal not-italic text-gray_700 w-[auto]"
                  variant="body2"
                >
                  PrIvacy Settings (advanced)
                </Text>
                <Img
                  src="images/img_arrowup.svg"
                  className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] question_One"
                  alt="arrowup"
                />
              </Row>
              <Row className="bg-gray_201 items-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[100%]">
                <Column className="bg-white_A700 border border-indigo_A200 border-solid items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[50%]">
                  <Text
                    className="font-normal mt-[4px] text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Public
                  </Text>
                  <Text
                    className="font-medium leading-[normal] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] text-bluegray_700 text-center w-[74%]"
                    variant="body1"
                  >
                    Anybody can access
                    <br />
                    your board
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[40%]">
                  <Text
                    className="font-normal text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Private
                  </Text>
                  <Text
                    className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-bluegray_700 w-[auto]"
                    variant="body1"
                  >
                    Limit access to your board
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="font-inter justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[94%]">
              <Row className="items-start justify-between w-[100%]">
                <Row className="items-end w-[65%]">
                  <Switch value={false} className="w-[15%]" />
                  <Text className="rowtoggle1" variant="body1">
                    Index In search Engine like Google
                  </Text>
                </Row>
                <Text
                  className="border border-indigo_A200 border-solid font-normal mt-[3px] pb-[1px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius4 text-indigo_A200 w-[auto]"
                  variant="body2"
                >
                  PAID PLAN REQUIRED
                </Text>
              </Row>
              <Row className="items-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[84%]">
                <Switch value={true} className="w-[12%]" />
                <Text className="rowtoggle1" variant="body1">
                  Show on home page (kajalmorker123.canny.Io)
                </Text>
              </Row>
            </Column>
            <Text
              className="font-inter xl:leading-[10px] 2xl:leading-[11px] 3xl:leading-[13px] lg:leading-[8px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic text-gray_602 w-[91%]"
              variant="body4"
            >
              Note: If your board already shows up In Google search results, It
              may take a few days to
              <br />
              be removed. if this is an issue, let us know.
            </Text>
            <Button
              className="font-gilroy font-semibold lg:ml-[204px] xl:ml-[255px] 2xl:ml-[287px] 3xl:ml-[344px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[16%]"
              shape="RoundedBorder6"
              size="md"
              variant="FillIndigoA200"
            >
              CREATE
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AdmincreateboardPage;
