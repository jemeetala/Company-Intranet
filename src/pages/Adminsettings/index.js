import React from "react";

import { Column, Row, Text, Line, Button, List } from "components";
import Header1 from "components/Header/Header1";

const AdminsettingsPage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[100%]">
            <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] pt-[3px] w-[16%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="font-normal lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] text-bluegray_600 w-[auto]"
                  variant="body2"
                >
                  YOU
                </Text>
                <Column className="bg-bluegray_50 justify-end lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[100%]">
                  <Text
                    className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[3px] text-bluegray_700 w-[auto]"
                    variant="body1"
                  >
                    Profile
                  </Text>
                </Column>
                <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[38%]">
                  <Text
                    className="font-medium text-bluegray_700 w-[auto]"
                    variant="body1"
                  >
                    Email Preferences
                  </Text>
                  <Text className="SavedFilters" variant="body1">
                    Saved Filters
                  </Text>
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[49%]">
                <Text
                  className="font-normal text-bluegray_600 w-[auto]"
                  variant="body2"
                >
                  XYZ
                </Text>
                <Text className="SavedFilters" variant="body1">
                  General
                </Text>
                <Text className="Notifications" variant="body1">
                  Notifications
                </Text>
                <Text className="SavedFilters" variant="body1">
                  Admins
                </Text>
                <Text className="SavedFilters" variant="body1">
                  Boards
                </Text>
                <Text className="Notifications" variant="body1">
                  Roadmap and Statuses
                </Text>
                <Text className="Notifications" variant="body1">
                  Post Fields
                </Text>
                <Text className="SavedFilters" variant="body1">
                  Changelog
                </Text>
                <Text className="Notifications" variant="body1">
                  Custom Domains
                </Text>
                <Text className="SavedFilters" variant="body1">
                  SSO Redirect
                </Text>
                <Text className="SavedFilters" variant="body1">
                  API
                </Text>
                <Text className="Notifications" variant="body1">
                  Integrations
                </Text>
                <Text className="SavedFilters" variant="body1">
                  Billing
                </Text>
              </Column>
            </Column>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-start 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[84%]">
              <Column className="justify-start pt-[1px] w-[100%]">
                <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[13%]">
                  <Text
                    className="font-medium text-bluegray_700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile
                  </Text>
                  <Text
                    className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Manage your canny Profile
                  </Text>
                </Column>
                <Line className="bg-bluegray_100 h-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]" />
              </Column>
              <Column className="font-gilroy justify-start lg:mb-[336px] xl:mb-[420px] 2xl:mb-[472px] 3xl:mb-[567px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[28%]">
                <Row className="items-center w-[39%]">
                  <Text
                    className="bg-purple_200 flex font-inter items-center xl:px-[11px] 2xl:px-[12px] 3xl:px-[15px] lg:px-[9px] rounded-radius50 text-white_A700 w-[50px]"
                    as="h2"
                    variant="h2"
                  >
                    K
                  </Text>
                  <Button
                    className="font-gilroy font-medium 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[65%]"
                    shape="RoundedBorder6"
                    size="md"
                    variant="OutlineBluegray700"
                  >
                    Upload Image
                  </Button>
                </Row>
                <List
                  className="font-inter gap-[0] min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius4 w-[100%]"
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
                      EMAIL
                    </Text>
                    <Text className="2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] featurerequest">
                      kajal.morker123@gmail.com
                    </Text>
                  </Column>
                </List>
                <Button
                  className="font-semibold lg:ml-[213px] xl:ml-[266px] 2xl:ml-[300px] 3xl:ml-[360px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[12%]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="FillIndigo100"
                >
                  SAVE
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default AdminsettingsPage;
