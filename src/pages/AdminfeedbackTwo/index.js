import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  SelectBox,
  Button,
  List,
  Input,
  RadioGroup,
  Radio,
  Line,
  Stack,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";

const AdminfeedbackTwoPage = () => {
  function handleNavigate() {
    window.location.href = "https://kajalmorker123.canny.Io/feedback/p...";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header className="w-[100%]" />
          <Row className="items-start w-[97%]">
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
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[92%]">
                <Text
                  className="font-normal text-bluegray_900 w-[auto]"
                  variant="body1"
                >
                  Date Range
                </Text>
                <Row className="items-center justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Button
                    className="font-bold 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[50%]"
                    shape="CustomBorderTL4"
                    size="sm"
                    variant="OutlineGray301"
                  >
                    POSTS
                  </Button>
                  <Button
                    className="font-bold 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[50%]"
                    shape="CustomBorderLR4"
                    size="sm"
                    variant="OutlineBluegray100"
                  >
                    VOTES
                  </Button>
                </Row>
                <SelectBox
                  className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[100%]"
                  placeholderClassName="text-bluegray_700"
                  name="Dropdown One"
                  placeholder="All Time"
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
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[92%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="Boards" variant="body1">
                    Boards
                  </Text>
                  <Text className="SelectAll">Select All</Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listcheckmark">
                    <Row className="items-start justify-evenly w-[31%]">
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
                      <Text className="rowcheckmark1" variant="body1">
                        Request
                      </Text>
                    </Row>
                    <Text className="rowcheckmark" variant="body2">
                      2
                    </Text>
                  </Row>
                  <Row className="listcheckmark">
                    <Row className="items-start justify-evenly w-[38%]">
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
                      <Text className="rowcheckmark1" variant="body1">
                        hello world
                      </Text>
                    </Row>
                    <Text className="rowcheckmark" variant="body2">
                      0
                    </Text>
                  </Row>
                  <Row className="listcheckmark">
                    <Row className="items-start justify-evenly w-[34%]">
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
                        feedback
                      </Text>
                    </Row>
                    <Text className="rowcheckmark" variant="body2">
                      4
                    </Text>
                  </Row>
                </List>
                <Row className="items-start ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[43%]">
                  <Img src="images/img_plus.svg" className="plus" alt="plus" />
                  <Text className="rowplus" variant="body1">
                    Create board
                  </Text>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[92%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="Status" variant="body1">
                    Status
                  </Text>
                  <Text className="Reset">Reset</Text>
                </Row>
                <Column className="justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[45%]">
                  <Row className="items-start w-[51%]">
                    <Button
                      className="flex items-center justify-center plus"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineBluegray100"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="checkmark Three"
                      />
                    </Button>
                    <Text className="rowplus" variant="body1">
                      Open
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
                        alt="checkmark Four"
                      />
                    </Button>
                    <Text className="rowcheckmark1" variant="body1">
                      Under Review
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[68%]">
                    <Button
                      className="flex items-center justify-center plus"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineBluegray100"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="checkmark Five"
                      />
                    </Button>
                    <Text className="rowplus" variant="body1">
                      Planned
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[85%]">
                    <Button
                      className="flex items-center justify-center plus"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineBluegray100"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="checkmark Six"
                      />
                    </Button>
                    <Text className="rowplus" variant="body1">
                      In Progress
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[76%]">
                    <Img
                      src="images/img_file.svg"
                      className="plus"
                      alt="file"
                    />
                    <Text className="rowplus" variant="body1">
                      Complete
                    </Text>
                  </Row>
                  <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[61%]">
                    <Img
                      src="images/img_file.svg"
                      className="plus"
                      alt="file One"
                    />
                    <Text className="rowplus" variant="body1">
                      Closed
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[92%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text className="rowusersegment" variant="body1">
                    Tags
                  </Text>
                  <Img
                    src="images/img_settings.svg"
                    className="settings"
                    alt="settings One"
                  />
                </Row>
                <Input
                  className="placeholder:text-bluegray_700 Searchbox"
                  wrapClassName="2xl:mt-[5px] 3xl:mt-[6px] lg:mt-[3px] w-[100%] xl:mt-[4px]"
                  name="Searchbox"
                  placeholder="Search..."
                ></Input>
                <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[57%]">
                  <Img
                    src="images/img_file.svg"
                    className="plus"
                    alt="file Two"
                  />
                  <Text className="rowplus" variant="body1">
                    Posts wIth no tags
                  </Text>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[92%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text className="rowusersegment" variant="body1">
                    CategorIes
                  </Text>
                  <Img
                    src="images/img_settings.svg"
                    className="settings"
                    alt="settings Two"
                  />
                </Row>
                <Input
                  className="placeholder:text-bluegray_700 Searchbox"
                  wrapClassName="2xl:mt-[5px] 3xl:mt-[6px] lg:mt-[3px] w-[100%] xl:mt-[4px]"
                  name="Searchbox One"
                  placeholder="Search..."
                ></Input>
                <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[57%]">
                  <Img
                    src="images/img_file.svg"
                    className="plus"
                    alt="file Three"
                  />
                  <Text className="rowplus" variant="body1">
                    Posts wIth no tags
                  </Text>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[92%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text
                    className="font-normal text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    Owner
                  </Text>
                  <Text className="Search">Search</Text>
                </Row>
                <RadioGroup
                  selectedValue="All"
                  className="lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[35%]"
                  name="radiogroupall"
                >
                  <Radio
                    value="All"
                    className="font-medium lg:mr-[26px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[45px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700"
                    inputClassName="h-[20px] mr-[5px] w-[20px]"
                    checked={true}
                    name="radiogroupall"
                    label="All"
                    shape="CircleBorder10"
                    variant="OutlineIndigoA200"
                  ></Radio>
                  <Radio
                    value="NoOwner"
                    className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[100%]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="radiogroupall"
                    label="No Owner"
                  ></Radio>
                  <Radio
                    value="Me"
                    className="font-medium lg:mr-[24px] xl:mr-[30px] 2xl:mr-[34px] 3xl:mr-[41px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="radiogroupall"
                    label="Me"
                    size="sm"
                  ></Radio>
                </RadioGroup>
                <Row className="items-start ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[43%]">
                  <Img
                    src="images/img_plus.svg"
                    className="plus"
                    alt="plus One"
                  />
                  <Text className="rowplus_one" variant="body1">
                    Create board
                  </Text>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_scrollbar.svg"
              className="lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] w-[2%]"
              alt="Scrollbar"
            />
            <Column className="bg-white_A700 items-center justify-start outline outline-[0.5px] outline-bluegray_100 lg:pb-[175px] xl:pb-[219px] 2xl:pb-[246px] 3xl:pb-[296px] w-[24%]">
              <Column className="bg-white_A700 items-end justify-start outline outline-[0.5px] outline-bluegray_100 lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_401 text-bluegray_401 w-[100%]"
                    wrapClassName="flex w-[92%]"
                    name="search One"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[4px] lg:w-[10px] lg:h-[11px] lg:mr-[4px] xl:w-[13px] xl:h-[14px] xl:mr-[5px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[6px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[7px] my-[auto]"
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
                    size="smSrc"
                    variant="srcFillGray201"
                  ></Input>
                  <Button
                    className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-center lg:w-[14px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                    shape="icbRoundedBorder4"
                    size="smIcn"
                    variant="icbOutlineIndigoA200"
                  >
                    <Img
                      src="images/img_edit.svg"
                      className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                      alt="edit"
                    />
                  </Button>
                </Row>
                <Row className="items-center justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[85%]">
                  <Row className="items-end w-[21%]">
                    <Img
                      src="images/img_filter.svg"
                      className="plus"
                      alt="filter"
                    />
                    <Text className="rowfilter" variant="body1">
                      Default
                    </Text>
                  </Row>
                  <Row className="items-end justify-center lg:ml-[59px] xl:ml-[74px] 2xl:ml-[83px] 3xl:ml-[99px] w-[24%]">
                    <Img
                      src="images/img_sort.svg"
                      className="plus"
                      alt="sort"
                    />
                    <Text className="rowfilter" variant="body1">
                      TrendIng
                    </Text>
                  </Row>
                  <Img
                    src="images/img_download.svg"
                    className="download"
                    alt="download"
                  />
                </Row>
              </Column>
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="listrectangle461">
                  <Line className="bg-indigo_A200 lg:h-[45px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] w-[2px]" />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[27%]">
                    <Text
                      className="font-normal text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      feature request
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
                          alt="file Four"
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
                <Column className="bg-white_A700 justify-start my-[0] outline outline-[0.5px] outline-bluegray_100 lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="nestFunction" as="h5" variant="h5">
                    nest Function
                  </Text>
                  <Text className="graphsupport_One" variant="body1">
                    graph support
                  </Text>
                  <Row className="items-start mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                    <Row className="items-end justify-evenly w-[37%]">
                      <Img
                        src="images/img_polygon4.svg"
                        className="PolygonFour"
                        alt="PolygonFour One"
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
                        alt="file Five"
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
                <Column className="bg-white_A700 justify-start my-[0] outline outline-[0.5px] outline-bluegray_100 lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="nestFunction" as="h5" variant="h5">
                    nest Function
                  </Text>
                  <Text className="graphsupport_One" variant="body1">
                    nest Function
                  </Text>
                  <Row className="items-start mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                    <Row className="items-end justify-evenly w-[37%]">
                      <Img
                        src="images/img_polygon4.svg"
                        className="PolygonFour"
                        alt="PolygonFour Two"
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
                        alt="file Six"
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
                <Column className="bg-white_A700 justify-start my-[0] outline outline-[0.5px] outline-bluegray_100 lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="nestFunction" as="h5" variant="h5">
                    Post Title
                  </Text>
                  <Text className="graphsupport_One" variant="body1">
                    This is the post details
                  </Text>
                  <Row className="items-start mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                    <Row className="items-end justify-evenly w-[37%]">
                      <Img
                        src="images/img_polygon4.svg"
                        className="PolygonFour"
                        alt="PolygonFour Three"
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
                        alt="file Seven"
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
                <Column className="bg-white_A700 justify-start my-[0] outline outline-[0.5px] outline-bluegray_100 lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="nestFunction" as="h5" variant="h5">
                    feedback4
                  </Text>
                  <Text className="graphsupport_One" variant="body1">
                    feedback4
                  </Text>
                  <Row className="items-start mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                    <Row className="items-end justify-evenly w-[37%]">
                      <Img
                        src="images/img_polygon4.svg"
                        className="PolygonFour"
                        alt="PolygonFour Four"
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
                        alt="file Eight"
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
                <Column className="bg-white_A700 justify-start my-[0] outline outline-[0.5px] outline-bluegray_100 lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="nestFunction" as="h5" variant="h5">
                    feedback3
                  </Text>
                  <Text className="graphsupport_One" variant="body1">
                    feedback3
                  </Text>
                  <Row className="items-start mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                    <Row className="items-end justify-evenly w-[37%]">
                      <Img
                        src="images/img_polygon4.svg"
                        className="PolygonFour"
                        alt="PolygonFour Five"
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
                        alt="file Nine"
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
                <Column className="bg-white_A700 justify-start my-[0] outline outline-[0.5px] outline-bluegray_100 lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="nestFunction" as="h5" variant="h5">
                    feedback1
                  </Text>
                  <Text className="graphsupport_One" variant="body1">
                    feedback3
                  </Text>
                  <Row className="items-start mb-[1px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
                    <Row className="items-end justify-evenly w-[37%]">
                      <Img
                        src="images/img_polygon4.svg"
                        className="PolygonFour"
                        alt="PolygonFour Six"
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
                        alt="file Ten"
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
              </List>
            </Column>
            <Column className="bg-white_A700 items-center justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] outline outline-[4px] outline-gray_300 xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] rounded-radius16 w-[58%]">
              <Row className="items-center justify-between w-[96%]">
                <Row className="items-center pb-[1px] w-[14%]">
                  <Column className="items-center w-[12%]">
                    <Img
                      src="images/img_polygon2.svg"
                      className="PolygonTwo1"
                      alt="PolygonTwo"
                    />
                    <Text className="columnpolygontwo1" as="h5" variant="h5">
                      1
                    </Text>
                  </Column>
                  <Text className="rowpolygontwo" as="h5" variant="h5">
                    feature request
                  </Text>
                </Row>
                <Img
                  src="images/img_upload.svg"
                  className="plus"
                  alt="upload"
                />
              </Row>
              <Stack className="lg:h-[341px] xl:h-[426px] 2xl:h-[479px] 3xl:h-[575px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                <Line className="absolute bg-gray_300 h-[1px] top-[0] w-[100%]" />
                <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[60%]">
                  <Column className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[59%]">
                    <Row className="items-start w-[19%]">
                      <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[43%]">
                        <Column className="absolute bg-purple_200 items-center justify-start left-[0] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius50 top-[0] bookmark">
                          <Text
                            className="mb-[1px] text-white_A700 w-[auto]"
                            variant="body3"
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
                      <Text className="rowk" variant="body1">
                        Kajal
                      </Text>
                    </Row>
                    <Column className="justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] mt-[1px] w-[90%]">
                      <Text className="columngraphsupport_two" variant="body1">
                        graph support
                      </Text>
                      <Row className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                        <Text className="September222" variant="body2">
                          September 22, 2022
                        </Text>
                        <Text className="EdItPost" variant="body2">
                          EdIt Post
                        </Text>
                        <Text className="September222" variant="body2">
                          Mark Spam
                        </Text>
                        <Text className="EdItPost" variant="body2">
                          Delete Post
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Row className="items-center justify-end ml-[auto] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[88%]">
                    <Text className="columngraphsupport_two" variant="body1">
                      Activity Feed
                    </Text>
                    <SelectBox
                      className="font-medium lg:ml-[203px] xl:ml-[254px] 2xl:ml-[285px] 3xl:ml-[343px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_700 w-[17%]"
                      placeholderClassName="text-bluegray_700"
                      name="Dropdown Two"
                      placeholder="View"
                      isSearchable={false}
                      isMulti={false}
                      getOptionLabel={(e) => (
                        <div className="flex items-center">
                          <Img
                            src="images/img_menu.svg"
                            className="mr-[4px] lg:w-[10px] lg:h-[11px] xl:w-[13px] xl:h-[14px] 2xl:w-[15px] 2xl:h-[16px] 3xl:w-[18px] 3xl:h-[19px]"
                            alt="menu"
                          />
                          <span>{e.label}</span>
                        </div>
                      )}
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
                  </Row>
                  <Column className="bg-gray_100 justify-end xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[95%]">
                    <Row className="items-start mt-[1px] w-[100%]">
                      <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]">
                        <Column className="absolute bg-purple_200 items-center justify-start left-[0] lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] rounded-radius50 top-[0] bookmark">
                          <Text
                            className="mb-[1px] text-white_A700 w-[auto]"
                            variant="body3"
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
                            alt="star One"
                          />
                        </Button>
                      </Stack>
                      <Text className="rowk" variant="body1">
                        Kajal
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="close"
                        alt="close"
                      />
                    </Row>
                    <Column className="justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:mr-[155px] xl:mr-[194px] 2xl:mr-[219px] 3xl:mr-[262px] mt-[1px] w-[45%]">
                      <Text className="columndffdf" variant="body1">
                        dffdf
                      </Text>
                      <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                        <Text
                          className="mt-[3px] columngraphsupport_two"
                          variant="body2"
                        >
                          Internal
                        </Text>
                        <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                        <Text className="September222" variant="body2">
                          6 Minutes ago
                        </Text>
                        <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                        <Text className="EdItComment">EdIt Comment</Text>
                        <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                        <Text className="EdItComment">Reply</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Row className="bg-gray_100 border border-indigo_A200 border-solid items-center lg:mt-[165px] xl:mt-[207px] 2xl:mt-[233px] 3xl:mt-[280px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text
                      className="bg-purple_200 flex items-center my-[4px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 text-white_A700 w-[24px]"
                      variant="body3"
                    >
                      K
                    </Text>
                    <Text
                      className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-gray_401 w-[auto]"
                      variant="body1"
                    >
                      Leave an Internal comment
                    </Text>
                  </Row>
                </Column>
                <Line className="absolute bg-gray_300 lg:h-[341px] xl:h-[426px] 2xl:h-[479px] 3xl:h-[575px] right-[39%] w-[1px]" />
                <Column className="absolute justify-start pt-[3px] right-[1%] top-[3%] w-[37%]">
                  <Column className="justify-start w-[96%]">
                    <Text
                      className="font-normal text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Details
                    </Text>
                    <Row className="items-center 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                      <Text className="Publiclink" variant="body1">
                        Public link
                      </Text>
                      <Text
                        className="common-pointer httpskajalmo"
                        variant="body1"
                        onClick={handleNavigate}
                      >
                        https://kajalmorker123.canny.Io/feedback/p...
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] pt-[1px] w-[43%]">
                      <Text className="rowboard" variant="body1">
                        Board
                      </Text>
                      <Row className="items-start justify-evenly lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[53%]">
                        <Text className="rowfeedback_two" variant="body1">
                          Feedback
                        </Text>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="settings"
                          alt="arrowdown"
                        />
                      </Row>
                    </Row>
                    <Row className="items-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] pt-[1px] w-[35%]">
                      <Text className="rowboard" variant="body1">
                        Status
                      </Text>
                      <Row className="items-start justify-evenly lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[43%]">
                        <Text className="rowfeedback_two" variant="body1">
                          Open
                        </Text>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="settings"
                          alt="arrowdown One"
                        />
                      </Row>
                    </Row>
                    <Row className="items-start 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[24%]">
                      <Text className="Publiclink" variant="body1">
                        Owner
                      </Text>
                      <Text
                        className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] not-italic Status"
                        variant="body1"
                      >
                        --
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[24%]">
                      <Text className="Publiclink" variant="body1">
                        Estimated
                      </Text>
                      <Text className="Two" variant="body1">
                        --
                      </Text>
                    </Row>
                    <Row className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[27%]">
                      <Text className="Category" variant="body1">
                        Category
                      </Text>
                      <Text className="Add" variant="body1">
                        Add
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <Text
                      className="font-normal text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Tags
                    </Text>
                    <Text className="Search">Add tags</Text>
                  </Row>
                  <Column className="lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] listposts">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-normal text-bluegray_900 w-[auto]"
                        variant="body1"
                      >
                        1 Voter
                      </Text>
                      <Text className="Search">Add voter</Text>
                    </Row>
                    <Column className="border border-gray_300 border-solid justify-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[100%]">
                      <Text className="columnprofile_three" variant="body3">
                        K
                      </Text>
                    </Column>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <Text
                      className="font-normal text-bluegray_900 w-[auto]"
                      variant="body1"
                    >
                      Roadmaps
                    </Text>
                    <Text className="Search">Add to roadmap</Text>
                  </Row>
                </Column>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default AdminfeedbackTwoPage;
