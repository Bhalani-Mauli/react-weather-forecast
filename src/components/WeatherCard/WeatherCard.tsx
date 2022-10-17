import { FaTint, FaWind, FaRegClock } from "react-icons/fa";
import { TbGauge, TbSunrise, TbSunset } from "react-icons/tb";
import { IconWithText } from "./components/IconWithText";
import { WeatherDataField } from "./components/WeatherDataField";
import {
  Container,
  CardBody,
  CardHeader,
  LocationIcon,
  CardDate,
  RowResultDataWrapper,
  MainTemprature,
  Temprature,
  Unit,
  ImgLogo,
} from "./WeatherCard.styled";

function WeatherCard() {
  return (
    <Container>
      <CardBody>
        <CardHeader>
          <LocationIcon />
          <div>
            Ahmedabad,India
            <CardDate>12.10.2022</CardDate>
          </div>
        </CardHeader>

        <MainTemprature>
          <Temprature>
            20<Unit>°C</Unit>
          </Temprature>
          <IconWithText text="Cloudy">
            <ImgLogo src="http://openweathermap.org/img/wn/01n@2x.png" />
          </IconWithText>
        </MainTemprature>

        <RowResultDataWrapper>
          <IconWithText text="22" unit="km/h">
            <FaWind size={12} />
          </IconWithText>
          <IconWithText text="22" unit="km/h">
            <FaTint size={12} />
          </IconWithText>
          <IconWithText text="1012" unit="hPa">
            <TbGauge size={12} />
          </IconWithText>
        </RowResultDataWrapper>

        <RowResultDataWrapper>
          <IconWithText text="7:30">
            <TbSunrise size={12} />
          </IconWithText>
          <IconWithText text="6:30">
            <TbSunset size={12} />
          </IconWithText>
        </RowResultDataWrapper>

        <WeatherDataField name="12:00" unit="°C" value="20">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="3:00" unit="°C" value="22">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="6:00" unit="°C" value="10">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="9:00" unit="°C" value="20">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="12:00" unit="°C" value="20">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="3:00" unit="°C" value="22">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="6:00" unit="°C" value="10">
          <FaRegClock />
        </WeatherDataField>
        <WeatherDataField name="9:00" unit="°C" value="20">
          <FaRegClock />
        </WeatherDataField>
      </CardBody>
    </Container>
  );
}

export default WeatherCard;
