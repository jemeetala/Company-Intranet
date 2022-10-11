import React from "react";

import {
  Column,
  Row,
  Stack,
  Text,
  Img,
  SelectBox,
  Button,
  List,
  Input,
  RadioGroup,
  Radio,
  Line,
  Switch,
} from "components";
import Header from "components/Header/Header";
import { CloseSVG } from "../../assets/images/index.js";

const AdminfeedbackThreePage = () => {
  function handleNavigate1() {
    window.location.href = "https://kajalmorker123.canny.Io/feedback/p...";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header className="w-[100%]" />
          <Row className="items-start w-[98%]">
            <Stack className="lg:h-[558px] xl:h-[698px] 2xl:h-[785px] 3xl:h-[942px] w-[18%]">
              <Row className="absolute items-start justify-evenly right-[0] w-[91%]">
                <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[91%]">
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
                          3
                        </Text>
                      </Row>
                      <Row className="listcheckmark">
                        <Row className="items-start justify-evenly w-[38%]">
                          <Img
                            src="images/img_file.svg"
                            className="plus"
                            alt="file"
                          />
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
                          <Img
                            src="images/img_file.svg"
                            className="plus"
                            alt="file One"
                          />
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
                      <Img
                        src="images/img_plus.svg"
                        className="plus"
                        alt="plus"
                      />
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
                            alt="checkmark One"
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
                            alt="checkmark Two"
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
                            alt="checkmark Three"
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
                            alt="checkmark Four"
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
                          alt="file Two"
                        />
                        <Text className="rowplus" variant="body1">
                          Complete
                        </Text>
                      </Row>
                      <Row className="items-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[61%]">
                        <Img
                          src="images/img_file.svg"
                          className="plus"
                          alt="file Three"
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
                        alt="file Four"
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
                        alt="file Five"
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
                  className="lg:h-[534px] xl:h-[668px] 2xl:h-[751px] 3xl:h-[901px] w-[9%]"
                  alt="Scrollbar"
                />
              </Row>
              <Column className="absolute bg-white_A700 border border-bluegray_100 border-solid bottom-[4%] items-center justify-end xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] w-[100%]">
                <Text className="font-normal mt-[3px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-indigo_A200 underline w-[auto]">
                  Update ‘Default’
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-indigo_A200 underline w-[auto]">
                  Create new saved Filter
                </Text>
              </Column>
            </Stack>
            <Column className="bg-white_A700 items-center justify-start outline outline-[0.5px] outline-bluegray_100 lg:pb-[356px] xl:pb-[446px] 2xl:pb-[502px] 3xl:pb-[602px] w-[24%]">
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
                <Row className="bg-indigo_50 items-center my-[0] outline outline-[0.5px] outline-bluegray_100 pt-[1px] px-[1px] w-[100%]">
                  <Line className="bg-indigo_A200 lg:h-[45px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] w-[2px]" />
                  <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[19%]">
                    <Text
                      className="font-normal text-bluegray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      duad3
                    </Text>
                    <Text
                      className="font-normal 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-bluegray_401 w-[auto]"
                      variant="body1"
                    >
                      zdasasasaxa
                    </Text>
                    <Row className="items-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
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
                </Row>
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
              </List>
            </Column>
            <Column className="bg-white_A700 items-center justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] outline outline-[4px] outline-gray_300 xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] rounded-radius16 w-[57%]">
              <Row className="items-center justify-between w-[96%]">
                <Row className="items-center pb-[1px] w-[7%]">
                  <Column className="items-center w-[24%]">
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
                    duad3
                  </Text>
                </Row>
                <Img
                  src="images/img_upload.svg"
                  className="plus"
                  alt="upload"
                />
              </Row>
              <Stack className="lg:h-[357px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                <Line className="absolute bg-gray_300 h-[1px] top-[0] w-[100%]" />
                <Column className="absolute h-[max-content] inset-y-[0] items-end justify-start left-[0] my-[auto] w-[60%]">
                  <Row className="items-center justify-end ml-[auto] w-[88%]">
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
                  <Column className="bg-gray_101 items-end justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[95%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start w-[100%]">
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
                              alt="star"
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
                      <Column className="justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] mt-[1px] w-[48%]">
                        <Text className="columndffdf" variant="body1">
                          hello
                        </Text>
                        <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Img
                            src="images/img_favorite.svg"
                            className="question_One"
                            alt="favorite"
                          />
                          <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                          <Text className="Internal1" variant="body2">
                            Internal
                          </Text>
                          <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                          <Text className="AMinuteago" variant="body2">
                            A Minute ago
                          </Text>
                          <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                          <Text className="EditComment">Edit Comment</Text>
                          <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                          <Text className="EdItComment">Reply</Text>
                        </Row>
                      </Column>
                    </Column>
                    <List
                      className="gap-[0] lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] min-h-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]"
                      orientation="vertical"
                    >
                      <Column className="justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                        <Row className="items-start w-[100%]">
                          <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[6%]">
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
                            className="lg:ml-[251px] xl:ml-[314px] 2xl:ml-[353px] 3xl:ml-[424px] question_One"
                            alt="close One"
                          />
                        </Row>
                        <Column className="justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] mt-[1px] w-[51%]">
                          <Text className="columndffdf" variant="body1">
                            afsasssdasa
                          </Text>
                          <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Img
                              src="images/img_favorite.svg"
                              className="question_One"
                              alt="favorite One"
                            />
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="Internal1" variant="body2">
                              Internal
                            </Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="AMinuteago" variant="body2">
                              A Minute ago
                            </Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="EditComment">Edit Comment</Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="EdItComment">Reply</Text>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                        <Row className="items-start w-[100%]">
                          <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[6%]">
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
                                alt="star Two"
                              />
                            </Button>
                          </Stack>
                          <Text className="rowk" variant="body1">
                            Kajal
                          </Text>
                          <Img
                            src="images/img_close.svg"
                            className="lg:ml-[251px] xl:ml-[314px] 2xl:ml-[353px] 3xl:ml-[424px] question_One"
                            alt="close Two"
                          />
                        </Row>
                        <Column className="justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] mt-[1px] w-[58%]">
                          <Text className="columndffdf" variant="body1">
                            das
                          </Text>
                          <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[71%]">
                            <Img
                              src="images/img_freelancer1.png"
                              className="lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                              alt="freelancerOne"
                            />
                            <Img
                              src="images/img_menu_50X66.svg"
                              className="lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] rounded-radius1 w-[29%]"
                              alt="menu"
                            />
                          </Row>
                          <Row className="items-start justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Img
                              src="images/img_favorite_16X16.svg"
                              className="question_One"
                              alt="favorite Two"
                            />
                            <Text
                              className="font-light mt-[3px] text-bluegray_600 w-[auto]"
                              variant="body2"
                            >
                              1 Like
                            </Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="Internal1" variant="body2">
                              Internal
                            </Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="AMinuteago" variant="body2">
                              A minute ago
                            </Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="EditComment">Edit Comment</Text>
                            <div className="bg-bluegray_700 h-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 w-[1px]"></div>
                            <Text className="EdItComment">Reply</Text>
                          </Row>
                        </Column>
                      </Column>
                    </List>
                  </Column>
                  <Column className="bg-gray_100 border border-indigo_A200 border-solid items-end justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Row className="items-center justify-between mt-[4px] w-[100%]">
                      <Row className="items-end justify-between w-[8%]">
                        <Text
                          className="bg-purple_200 flex items-center lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius50 text-white_A700 w-[24px]"
                          variant="body3"
                        >
                          K
                        </Text>
                        <Text
                          className="font-medium mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          fsf
                        </Text>
                      </Row>
                      <Img
                        src="images/img_bookmark.svg"
                        className="bookmark"
                        alt="bookmark"
                      />
                    </Row>
                    <Row className="items-center justify-end mb-[4px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[96%]">
                      <Row className="items-end justify-evenly w-[14%]">
                        <Switch value={false} className="w-[43%]" />
                        <Text
                          className="font-normal mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic text-bluegray_402 w-[auto]"
                          variant="body1"
                        >
                          Public
                        </Text>
                      </Row>
                      <Row className="items-start justify-between lg:ml-[130px] xl:ml-[162px] 2xl:ml-[183px] 3xl:ml-[219px] w-[45%]">
                        <Text
                          className="font-normal leading-[normal] mt-[4px] not-italic text-bluegray_402 w-[57%]"
                          variant="body1"
                        >
                          MentIoned Admins will
                          <br />
                          be notified.
                        </Text>
                        <Button
                          className="font-normal 3xl:text-[10px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px] text-center w-[35%]"
                          shape="RoundedBorder6"
                          size="lg"
                          variant="FillIndigoA200"
                        >
                          SUBMIT
                        </Button>
                      </Row>
                    </Row>
                  </Column>
                </Column>
                <Line className="absolute bg-gray_300 lg:h-[357px] xl:h-[447px] 2xl:h-[503px] 3xl:h-[603px] right-[39%] w-[1px]" />
                <Column className="absolute justify-start pt-[3px] right-[1%] top-[2%] w-[37%]">
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
                        onClick={handleNavigate1}
                      >
                        https://kajalmorker123.canny.Io/feedback/p...
                      </Text>
                    </Row>
                    <Row className="items-start lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] pt-[1px] w-[40%]">
                      <Text className="rowboard" variant="body1">
                        Board
                      </Text>
                      <Row className="items-start justify-evenly lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[50%]">
                        <Text className="rowfeedback_two" variant="body1">
                          Request
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
                  <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
                    <Text
                      className="font-normal mt-[3px] not-italic text-bluegray_401 w-[auto]"
                      variant="body1"
                    >
                      New Roadmap 4
                    </Text>
                    <Img
                      src="images/img_close_16X16.svg"
                      className="settings"
                      alt="close Three"
                    />
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

export default AdminfeedbackThreePage;
