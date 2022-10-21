import moment from "moment";
import { FaTint, FaWind, FaRegClock } from "react-icons/fa";
import { TbGauge, TbSunrise, TbSunset } from "react-icons/tb";
import { City, FilteredWeatherType } from "types/api";
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

interface PropTypes {
  weatherData: FilteredWeatherType;
  cityData: City;
}
function WeatherCard({ weatherData, cityData }: PropTypes) {
  const { name, country, sunrise, sunset } = cityData;
  const { calculatedData, date, hourly } = weatherData;
  const { humdity, pressure, temp, windSpeed } = calculatedData;
  const isTodaysCard = moment().isSame(date, "day");
  return (
    <Container isTodaysCard={isTodaysCard}>
      <CardBody>
        <CardHeader>
          <LocationIcon />
          <div>
            {name},{country}
            <CardDate>{date}</CardDate>
          </div>
        </CardHeader>

        <MainTemprature>
          <Temprature>
            {temp}
            <Unit>°C</Unit>
          </Temprature>
        </MainTemprature>

        <RowResultDataWrapper>
          <IconWithText text={windSpeed} unit="km/h">
            <FaWind size={12} />
          </IconWithText>
          <IconWithText text={humdity} unit="%">
            <FaTint size={12} />
          </IconWithText>
          <IconWithText text={pressure} unit="hPa">
            <TbGauge size={12} />
          </IconWithText>
        </RowResultDataWrapper>

        <RowResultDataWrapper>
          <IconWithText text={sunrise}>
            <TbSunrise size={12} />
          </IconWithText>
          <IconWithText text={sunset}>
            <TbSunset size={12} />
          </IconWithText>
        </RowResultDataWrapper>

        {hourly?.map((i, index) => (
          <WeatherDataField
            key={`${index}-${i.time}`}
            name={i.time}
            unit="°C"
            value={i.temp.toFixed(0)}
          >
            <FaRegClock />
          </WeatherDataField>
        ))}
      </CardBody>
    </Container>
  );
}

export default WeatherCard;
