import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  SelectBox,
  RadioGroup,
  Radio,
  Stack,
  Line,
  List,
} from "components";
import { getTagsselectname } from "service/api";

const AdminusersPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = {};

    getTagsselectname(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-indigo_A200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
              <Img
                src="images/img_question.svg"
                className="question"
                alt="question"
              />
              <Row className="items-start justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[19%]">
                <Text
                  className="hover:font-medium lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] rowfeedback"
                  as="h5"
                  variant="h5"
                >
                  Feedback
                </Text>
                <Text
                  className="hover:font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowfeedback"
                  as="h5"
                  variant="h5"
                >
                  Roadmap
                </Text>
                <Button
                  className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[17%]"
                  shape="RoundedBorder6"
                  size="md"
                  variant="FillIndigo500"
                >
                  Users
                </Button>
                <Text
                  className="hover:font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowfeedback"
                  as="h5"
                  variant="h5"
                >
                  Changelog
                </Text>
              </Row>
              <Button
                className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:ml-[1055px] lg:ml-[625px] xl:ml-[781px] 2xl:ml-[879px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
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
          <Row className="items-start justify-evenly w-[98%]">
            <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[15%]">
              <Column className="items-center justify-start w-[92%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text className="rowusersegment" variant="body1">
                    User segment
                  </Text>
                  <Img
                    src="images/img_settings.svg"
                    className="settings"
                    alt="settings"
                  />
                </Row>
                <SelectBox
                  className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[100%]"
                  placeholderClassName="text-bluegray_700"
                  name="Dropdown"
                  placeholder="Everyone (default)"
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
                  variant="OutlineBluegray100"
                ></SelectBox>
              </Column>
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[38%]">
                <Text
                  className="font-normal text-bluegray_900 w-[auto]"
                  variant="body1"
                >
                  Sort
                </Text>
                <RadioGroup
                  selectedValue="LastActivity"
                  className="lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[100%]"
                  name="radiogrouplastactivity"
                >
                  <Radio
                    value="LastActivity"
                    className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[100%]"
                    inputClassName="h-[20px] mr-[5px] w-[20px]"
                    checked={true}
                    name="radiogrouplastactivity"
                    label="Last Activity"
                    shape="CircleBorder10"
                    variant="OutlineIndigoA200"
                  ></Radio>
                  <Radio
                    value="TopPosters"
                    className="font-medium mr-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="radiogrouplastactivity"
                    label="Top Posters"
                  ></Radio>
                  <Radio
                    value="TopVoters"
                    className="font-medium lg:mr-[5px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="radiogrouplastactivity"
                    label="Top Voters"
                  ></Radio>
                </RadioGroup>
              </Column>
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[34%]">
                <Text
                  className="font-normal text-bluegray_900 w-[auto]"
                  variant="body1"
                >
                  Activity
                </Text>
                <Column className="justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[100%]">
                  <Row className="items-start w-[64%]">
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
                      Posts
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[65%]">
                    <Button
                      className="flex items-center justify-center plus"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineBluegray100"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="checkmark One"
                      />
                    </Button>
                    <Text className="rowplus" variant="body1">
                      Votes
                    </Text>
                  </Row>
                  <Row className="items-start justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                    <Button
                      className="flex items-center justify-center plus"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineBluegray100"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="checkmark Two"
                      />
                    </Button>
                    <Text className="rowcheckmark1" variant="body1">
                      Comments
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Stack className="lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] w-[25%]">
              <Column className="absolute items-center justify-start top-[2%] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                    <Text className="rowusersegment" variant="body1">
                      Tracked User
                    </Text>
                    <Text
                      className="font-normal mb-[1px] ml-[4px] not-italic text-bluegray_400 w-[auto]"
                      variant="body1"
                    >
                      (1 total)
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                </Column>
                <Column className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                  <Row className="items-end xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                    <Img
                      src="images/img_search.svg"
                      className="plus"
                      alt="search"
                    />
                    <Text className="not-italic rowedit" variant="body1">
                      Search by name...
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                </Column>
                <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                  <Stack className="lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[1px] w-[8%]">
                    <Column className="absolute bg-purple_200 h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                      <Text
                        className="mt-[2px] text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        K
                      </Text>
                    </Column>
                    <Button
                      className="absolute bottom-[0] flex items-center justify-center right-[0] rounded-radius50 question_One"
                      size="smIcn"
                      variant="icbOutlineWhiteA700"
                    >
                      <Img
                        src="images/img_star.svg"
                        className="flex items-center justify-center lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[10px]"
                        alt="star"
                      />
                    </Button>
                  </Stack>
                  <Text
                    className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] text-indigo_A200 w-[auto]"
                    variant="body1"
                  >
                    Kajal
                  </Text>
                </Row>
              </Column>
              <Line className="absolute bg-bluegray_100 lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] left-[0] w-[1px]" />
            </Stack>
            <Stack className="lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] w-[42%]">
              <Line className="absolute bg-bluegray_100 lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] left-[0] w-[1px]" />
              <List
                className="absolute gap-[0] min-h-[auto] top-[0] w-[100%]"
                orientation="vertical"
              >
                {apiData?.map((apiDataResponseEle, index) => {
                  return (
                    <React.Fragment key={`apiDataResponseEle${index}`}>
                      <Row className="bg-white_A700 items-center my-[0] outline outline-[0.5px] outline-bluegray_100 xl:px-[11px] 2xl:px-[12px] 3xl:px-[15px] lg:px-[9px] w-[100%]">
                        <Img
                          src="images/img_lightbulb.svg"
                          className="lightbulb"
                          alt="lightbulb"
                        />
                        <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[16%]">
                          <Text
                            className="font-normal text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            {apiDataResponseEle?.name}
                          </Text>
                          <Text className="graphsupport" variant="body1">
                            graph support
                          </Text>
                          <Row className="items-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[56%]">
                            <Row className="items-end justify-evenly w-[37%]">
                              <Img
                                src="images/img_polygon4.svg"
                                className="PolygonFour"
                                alt="PolygonFour"
                              />
                              <Text
                                className="font-medium text-bluegray_700 w-[auto]"
                                variant="body1"
                              >
                                1
                              </Text>
                            </Row>
                            <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[39%]">
                              <Img
                                src="images/img_file_12X12.svg"
                                className="file_Four"
                                alt="file"
                              />
                              <Text
                                className="font-medium text-bluegray_700 w-[auto]"
                                variant="body1"
                              >
                                0
                              </Text>
                            </Row>
                          </Row>
                        </Column>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </List>
            </Stack>
            <Column className="bg-white_A700 justify-center outline outline-[0.5px] outline-bluegray_100 xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[18%]">
              <Text className="rowusersegment" variant="body1">
                Kajal
              </Text>
              <Row className="items-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[57%]">
                <Text className="Accountcreated" variant="body1">
                  Account created
                </Text>
                <Text className="Unknown" variant="body1">
                  Unknown
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[74%]">
                <Text className="Publiclink" variant="body1">
                  Email
                </Text>
                <Text className="email_One" variant="body1">
                  kajal.morker123@gmail.com
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[17%]">
                <Text className="Publiclink" variant="body1">
                  Posts
                </Text>
                <Text className="email_One" variant="body1">
                  8
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[29%]">
                <Text className="Accountcreated" variant="body1">
                  Comments
                </Text>
                <Text className="Unknown" variant="body1">
                  3
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[17%]">
                <Text className="Publiclink" variant="body1">
                  Votes
                </Text>
                <Text className="email_One" variant="body1">
                  8
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[38%]">
                <Text className="Accountcreated" variant="body1">
                  User ID
                </Text>
                <Text className="Unknown" variant="body1">
                  Unknown
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[59%]">
                <Text className="Publiclink" variant="body1">
                  Last Activity
                </Text>
                <Text className="email_One" variant="body1">
                  7 Minutes ago
                </Text>
              </Row>
              <Row className="items-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[37%]">
                <Text className="Publiclink" variant="body1">
                  Browser
                </Text>
                <Text className="email_One" variant="body1">
                  Chrome
                </Text>
              </Row>
              <Row className="items-center lg:mb-[377px] xl:mb-[471px] 2xl:mb-[530px] 3xl:mb-[636px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[37%]">
                <Text className="Publiclink" variant="body1">
                  OS
                </Text>
                <Text className="email_One" variant="body1">
                  Linux 64 - bit
                </Text>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default AdminusersPage;
