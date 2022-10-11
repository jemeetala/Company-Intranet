import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Line,
  Input,
  SelectBox,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const UsercreatepostPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-start mx-[auto] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] w-[100%]">
        <Column className="items-center justify-start lg:mb-[233px] xl:mb-[291px] 2xl:mb-[327px] 3xl:mb-[393px] w-[100%]">
          <header className="w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start w-[51%]">
                <Row className="items-center w-[100%]">
                  <Text
                    className="font-normal text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    DhIWIse
                  </Text>
                  <Button
                    className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:ml-[430px] xl:ml-[538px] 2xl:ml-[605px] 3xl:ml-[726px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
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
                <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[31%]">
                  <Row className="items-end w-[34%]">
                    <Img
                      src="images/img_frame413_20X20.svg"
                      className="plus"
                      alt="Frame413"
                    />
                    <Text className="rowsearch2" variant="body1">
                      ROADMAP
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[54%]">
                    <Img
                      src="images/img_lightbulb_1.svg"
                      className="plus"
                      alt="lightbulb"
                    />
                    <Text
                      className="font-bold lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] text-indigo_A200 w-[auto]"
                      variant="body1"
                    >
                      GIVE FEEDBACK
                    </Text>
                    <Img
                      src="images/img_arrowdown_1.svg"
                      className="plus"
                      alt="arrowdown"
                    />
                  </Row>
                </Row>
              </Column>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]" />
            </Column>
          </header>
          <Row className="items-start justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[51%]">
            <Column className="bg-gray_102 items-center justify-end lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[31%]">
              <Text
                className="font-medium mt-[2px] text-bluegray_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Create a Post
              </Text>
              <Column className="items-center justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                <Column className="items-center justify-start lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text
                      className="font-normal text-bluegray_402 w-[auto]"
                      variant="body1"
                    >
                      TITLE
                    </Text>
                    <Input
                      className="font-medium p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_100 text-bluegray_100 w-[100%]"
                      wrapClassName="2xl:mt-[7px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
                      name="InputField"
                      placeholder="Short, Descriptive title"
                      size="lg"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                    <Text
                      className="font-normal text-bluegray_402 w-[auto]"
                      variant="body1"
                    >
                      DETAILS
                    </Text>
                    <Input
                      className="font-medium p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_100 text-bluegray_100 w-[100%]"
                      wrapClassName="2xl:mt-[7px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
                      name="InputField One"
                      placeholder="Any Additional details..."
                      size="md"
                    ></Input>
                  </Column>
                </Column>
                <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Button
                    className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    shape="icbRoundedBorder4"
                    size="mdIcn"
                    variant="icbOutlineBluegray1001_2"
                  >
                    <Img
                      src="images/img_bookmark.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="bookmark"
                    />
                  </Button>
                  <Button
                    className="font-normal 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="FillIndigoA200"
                  >
                    CREATE POST
                  </Button>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[65%]">
              <Row className="items-center justify-between w-[100%]">
                <Row className="items-start justify-between w-[38%]">
                  <Text
                    className="font-medium lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-bluegray_402 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Showing
                  </Text>
                  <Column className="items-center justify-start pt-[1px] w-[42%]">
                    <SelectBox
                      className="font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_402 w-[100%]"
                      placeholderClassName="text-bluegray_402"
                      name="Group374"
                      placeholder="TrendIng"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_1.svg"
                          className="mr-[0] lg:w-[10px] lg:h-[11px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px]"
                          alt="arrow_down"
                        />
                      }
                      size="md"
                    ></SelectBox>
                    <Line className="bg-bluegray_402 h-[1px] mt-[2px] w-[100%]" />
                  </Column>
                  <Text
                    className="font-medium mt-[4px] text-bluegray_402 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Posts
                  </Text>
                </Row>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_401 text-bluegray_401 w-[100%]"
                  wrapClassName="flex w-[38%]"
                  name="Dropdown"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:mx-[4px] xl:w-[13px] xl:h-[14px] xl:mx-[5px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mx-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mx-[7px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#8a8a8a"
                        className="cursor-pointer lg:w-[10px] lg:h-[11px] lg:ml-[5px] lg:mr-[11px] xl:w-[13px] xl:h-[14px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder4"
                  size="mdSrc"
                  variant="srcOutlineBluegray100"
                ></Input>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[98%]"
                orientation="vertical"
              >
                <Row className="listpolygontwo">
                  <Column className="border border-bluegray_50 border-solid items-center justify-start mt-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[8%]">
                    <Img
                      src="images/img_polygon2_9X18.svg"
                      className="PolygonTwo"
                      alt="PolygonTwo"
                    />
                    <Text className="columnpolygontwo" as="h5" variant="h5">
                      2
                    </Text>
                  </Column>
                  <Column className="justify-start w-[90%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="font-normal text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Flutter - Name Field Must Be A Valid Dart Identifier
                      </Text>
                      <Row className="items-center justify-evenly mt-[1px] w-[6%]">
                        <Img
                          src="images/img_computer.svg"
                          className="plus"
                          alt="computer"
                        />
                        <Text
                          className="font-medium text-bluegray_700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          0
                        </Text>
                      </Row>
                    </Row>
                    <Text
                      className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_402 w-[87%]"
                      as="h5"
                      variant="h5"
                    >
                      server - Production User Should not allow to write “-” in
                      Flutter
                      <br />
                      Application name, Or You should handle it before Building
                      Code.
                    </Text>
                  </Column>
                </Row>
                <Row className="listpolygontwo">
                  <Column className="border border-bluegray_50 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[8%]">
                    <Img
                      src="images/img_polygon2.svg"
                      className="PolygonTwo"
                      alt="PolygonTwo One"
                    />
                    <Text className="columnpolygontwo" as="h5" variant="h5">
                      2
                    </Text>
                  </Column>
                  <Column className="justify-start w-[90%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="font-normal text-bluegray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Flutter : Form Validation not working on submit.
                      </Text>
                      <Row className="items-center justify-evenly w-[6%]">
                        <Img
                          src="images/img_computer.svg"
                          className="plus"
                          alt="computer One"
                        />
                        <Text
                          className="font-medium text-bluegray_700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          0
                        </Text>
                      </Row>
                    </Row>
                    <Text
                      className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_402 w-[90%]"
                      as="h5"
                      variant="h5"
                    >
                      Validation message show only when focus out of field.
                      Suggestion:
                      <br />
                      add localization for message
                    </Text>
                  </Column>
                </Row>
                <Row className="listpolygontwo">
                  <Column className="border border-bluegray_50 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[8%]">
                    <Img
                      src="images/img_polygon2_9X18.svg"
                      className="PolygonTwo"
                      alt="PolygonTwo Two"
                    />
                    <Text className="columnpolygontwo" as="h5" variant="h5">
                      1
                    </Text>
                  </Column>
                  <Column className="justify-start w-[90%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="Boards" as="h5" variant="h5">
                        API Runner
                      </Text>
                      <Row className="items-center justify-evenly w-[6%]">
                        <Img
                          src="images/img_computer.svg"
                          className="plus"
                          alt="computer Two"
                        />
                        <Text
                          className="font-medium text-bluegray_700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          0
                        </Text>
                      </Row>
                    </Row>
                    <Text className="columnapirunner" as="h5" variant="h5">
                      Ability to sort and filter APIs by environment ability to
                      multi-select
                      <br />
                      APIs and change the environment with which they are
                      associated...
                    </Text>
                  </Column>
                </Row>
                <Row className="listpolygontwo">
                  <Column className="border border-bluegray_50 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[8%]">
                    <Img
                      src="images/img_polygon2_9X18.svg"
                      className="PolygonTwo"
                      alt="PolygonTwo Three"
                    />
                    <Text className="columnpolygontwo" as="h5" variant="h5">
                      1
                    </Text>
                  </Column>
                  <Column className="justify-start w-[90%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="rowusersegment" as="h5" variant="h5">
                        Flutter: Need Support To Add Json In Constant Data Type
                      </Text>
                      <Row className="items-center justify-evenly w-[6%]">
                        <Img
                          src="images/img_computer.svg"
                          className="plus"
                          alt="computer Three"
                        />
                        <Text
                          className="font-medium text-bluegray_700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          0
                        </Text>
                      </Row>
                    </Row>
                    <Text className="columnapirunner" as="h5" variant="h5">
                      First 2 screenshots are what i can generate using flutter
                      builder 3rd
                      <br />
                      and 4th screenshot is solution and what i want to use in
                      my...
                    </Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default UsercreatepostPage;
