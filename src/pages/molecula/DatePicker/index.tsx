import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';

const DatePickerContainer = styled.div.attrs({
  className: 'antialiased sans-serif'
})``;

const DatePickerLayout = styled.div.attrs({
  className: ''
})``;

const DatePickerMainContainer = styled.div.attrs({
  className: 'container mx-auto px-4 py-2 md:py-10'
})``;

const DateInputContainer = styled.div.attrs({
  className: 'mb-5 w-64'
})``;
const DateInputLayout = styled.div.attrs({
  className: 'relative'
})``;

const InputHidden = styled.input.attrs({
  type: 'hidden',
  name: 'date'
})``;

const InputText = styled.input.attrs({
  type: 'text',
  className: 'w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium',
  placeholder: 'Select date'
})``;

const IconContainer = styled.div.attrs({
  className: 'absolute top-0 right-0 px-3 py-2'
})``;

const SVG = styled.svg.attrs({
  className: 'h-6 w-6 text-gray-400',
  fill:"none",
  viewBox:"0 0 24 24",
  stroke:"currentColor"
})``;

const PathTag = styled.path.attrs({
  trokeLinecap:"round",
  strokeLinejoin:"round",
  strokeWidth:"2",
  d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
})``;
interface Props {
  toggle?: boolean;
}

const CalendarContainer = styled.div.attrs({
  className: 'bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0'
})`
width: 17rem;
${(p: Props) => (p.toggle ? "display: unset;" : "display: none;")};
`;
const CalendarHeaderContainer = styled.div.attrs({
  className: 'flex justify-between items-center mb-2'
})``;
const CalendarDetailContainer = styled.div.attrs({
  className: ''
})``;
const MonthText = styled.span.attrs({
  className: 'text-lg font-bold text-gray-800'
})``;
const YearText = styled.span.attrs({
  className: 'ml-1 text-lg text-gray-600 font-normal'
})``;

const ButtonHeaderConatiner = styled.div.attrs({
  className: ''
})``;

const ButtonControMonth = styled.button.attrs({
  type:"button",
  className: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full'
})``

const SVGButton = styled.svg.attrs({
  className: 'h-6 w-6 text-gray-500 inline-flex',
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
})``;

const PathIconPreviousButton = styled.path.attrs({
  strokeLinecap:"round",
  strokeLinejoin:"round",
  strokeWidth:"2",
  d:"M15 19l-7-7 7-7"
})``;

const PathIconNextButton = styled.path.attrs({
  strokeLinecap:"round",
  strokeLinejoin:"round",
  strokeWidth:"2",
  d:"M9 5l7 7-7 7"
})``;

const DayContainer = styled.div.attrs({
  className: 'flex flex-wrap mb-3 -mx-1'
})``;
const DayLayoutText = styled.div.attrs({
  className: 'px-1'
})`width: 14.26%;`;
const TextDay = styled.div.attrs({
  className: 'text-gray-800 font-medium text-center text-xs'
})``;
const DaiesConatiner = styled.div.attrs({
  className: 'flex flex-wrap -mx-1'
})``;
const BlankDay = styled.div.attrs({
  className: 'text-center border p-1 border-transparent text-sm'
})`
  width: 14.28%;
`;

const RealDayLayout = styled.div.attrs({
  className: 'px-1 mb-1'
})`
  width: 14.28%;
`;

type PropType = {
  danger: boolean
}

const Badge = styled.div.attrs((props: PropType) => ({
    className: `cursor-pointer text-center text-sm
      leading-none rounded-full leading-loose
      transition ease-in-out duration-100 ${props.danger ? 'bg-blue-500 text-white': 'text-gray-700 hover:bg-blue-200'}`,
}))<PropType>`
`;


const DatePicker = () => {
  const MONTH_NAMES = [
    'January', 'February', 'March', 
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [showDatepicker, setShowDatepicker] = useState<boolean>(false);
  const [datepickerValue, setDatepickerValue] = useState<string>('');
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [noOfDays, setNoOfDays] = useState<number[]>([]);
  const [blankdays, setBlankdays] = useState<number[]>([]);
  const date = useRef<HTMLInputElement>(null);

  const initDate = () => {
    const today = new Date();
    console.log(today.getDay())
    setMonth(today.getMonth());
    setYear(today.getFullYear());
    const datepicker = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const _month = String(datepicker.getMonth() + 1).padStart(2, '0');
    const _day = String(datepicker.getDate()).padStart(2, '0');
    const _year = datepicker.getFullYear();
    const output = `${_day}/${_month}/${_year}`
    setDatepickerValue(output);
  }

  const isToday = (date: number) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  const getDateValue = (dates: number) => {
    const selectedDate = new Date(year, month, dates);
    if (date.current) {
      const _month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const _day = String(selectedDate.getDate()).padStart(2, '0');
      const _year = selectedDate.getFullYear();
      const output = `${_day}/${_month}/${_year}`
      date.current.value = output
      setDatepickerValue(output);
    }
    setShowDatepicker(false);
  }

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }
    
    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    setBlankdays(blankdaysArray);
    setNoOfDays(daysArray);
  }

  const ClikeNextDate = () => {
    setMonth(month + 1);
  }
  const ClikePreviousDate = () => {
    setMonth(month - 1);
  }

  useEffect(() => {
    initDate();
    getNoOfDays();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getNoOfDays();
    // eslint-disable-next-line
  }, [month])

  return (
    <>
    <DatePickerContainer>
      <DatePickerLayout>
        <DatePickerMainContainer>
          <DateInputContainer>
            <DateInputLayout>
              <InputHidden ref={date}/>
              <InputText 
                onClick={() =>setShowDatepicker(!showDatepicker)}
                value={datepickerValue}
                readOnly={true}
              />
              <IconContainer>
                <SVG> 
                  <PathTag/>
                </SVG>
              </IconContainer>
              <CalendarContainer toggle={showDatepicker}>
                <CalendarHeaderContainer>
                  <CalendarDetailContainer>
                    <MonthText>{MONTH_NAMES[month]}</MonthText>
                    <YearText>{year}</YearText>
                  </CalendarDetailContainer>
                  <ButtonHeaderConatiner>
                    <ButtonControMonth 
                      onClick={ClikePreviousDate}
                      disabled={month === 0}
                    >
                      <SVGButton>
                        <PathIconPreviousButton/>
                      </SVGButton>
                    </ButtonControMonth>
                    <ButtonControMonth 
                      onClick={ClikeNextDate}
                      disabled={month === 11}
                    >
                      <SVGButton>
                        <PathIconNextButton/>
                      </SVGButton>
                    </ButtonControMonth>
                  </ButtonHeaderConatiner>
                </CalendarHeaderContainer>
                <DayContainer>
                  {
                    DAYS.map((day, index) => (
                      <DayLayoutText key={index}>
                        <TextDay>{day}</TextDay>
                      </DayLayoutText>
                    ))
                  }
                </DayContainer>
                <DaiesConatiner>
                  {
                    blankdays.map((_, index) => (
                      <BlankDay key={index}></BlankDay>
                    ))
                  }
                  {
                    noOfDays.map((day, index) => (
                      <RealDayLayout key={index} >
                        <Badge
                          danger={isToday(day)}
                          onClick={() => getDateValue(day)}
                        >
                          {day}
                        </Badge>
                      </RealDayLayout>
                    ))
                  }
                </DaiesConatiner>
              </CalendarContainer>
            </DateInputLayout>
          </DateInputContainer>
        </DatePickerMainContainer>
      </DatePickerLayout>
    </DatePickerContainer>
    </>
  );
};

export default DatePicker;
