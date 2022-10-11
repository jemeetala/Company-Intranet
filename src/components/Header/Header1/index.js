import React from "react";

import { Row, Img, Text, Button } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-indigo_A200 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
          <Img
            src="images/img_question.svg"
            className="question"
            alt="question"
          />
          <Row className="items-start justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[19%]">
            <Text
              className="hover:bg-purple_200 hover:font-medium hover:justify-center mb-[1px] rowfeedback3"
              as="h5"
              variant="h5"
            >
              Feedback
            </Text>
            <Text
              className="hover:bg-purple_200 hover:font-medium hover:justify-center mt-[1px] rowfeedback2"
              as="h5"
              variant="h5"
            >
              Roadmap
            </Text>
            <Text
              className="hover:bg-purple_200 hover:font-medium hover:justify-center mb-[1px] rowfeedback2"
              as="h5"
              variant="h5"
            >
              Users
            </Text>
            <Text
              className="hover:bg-purple_200 hover:font-medium hover:justify-center my-[1px] rowfeedback2"
              as="h5"
              variant="h5"
            >
              Changelog
            </Text>
          </Row>
          <Button
            className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:ml-[1069px] lg:ml-[633px] xl:ml-[792px] 2xl:ml-[891px] rounded-radius50 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
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
          <Text
            className="cursor-pointer hover:font-medium TopNav1"
            as="h4"
            variant="h4"
          >
            K
          </Text>
        </Row>
      </header>
    </>
  );
};

export default Header1;
