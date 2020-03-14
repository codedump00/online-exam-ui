import React, { ReactElement, useState, useEffect } from 'react'
import { Typography, Checkbox, Input, Button, Pagination } from 'antd'
import Chart from 'chart.js'

import './exam.css'
import Questions from '../../data/fake';

const { Title } = Typography;
const { TextArea } = Input;

interface Props {
  setNavbar?: any;

}

export default function ExamPage({ setNavbar }: Props): ReactElement {

  const [textValue, setTextValue] = useState('');

  const onTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.currentTarget.value)
  }

  useEffect(() => {
    //@ts-ignore
    document.getElementById('footer')?.style.setProperty('display', 'none');
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    if (ctx)
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['0 Answered', '20 Remaining'],
          datasets: [{
            label: 'Questions',
            data: [0, 20],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1

          }],

        },
        options: {

        },
      });
  }, [])

  function onShowSizeChange(current: any, pageSize: any) {
    console.log(current, pageSize);
  }


  return (
    <div className="exam__page">
      <div></div>
      <div className="side__menu">
        <Title level={4} className="side__titles">Time</Title>
        <div className="side__menu__controls">
          <div className="side__data">
            <Title level={4} className="data__title">Start</Title>
            <b>12.31 AM</b>
          </div>
          <div className="side__data">
            <Title level={4} className="data__title">Halt</Title>
            <b>2.31 PM</b>
          </div>
          <div className="side__data">
            <Title level={4} className="data__title">Remaining</Title>
            <b>2 hours</b>
          </div>
        </div>
        <Title level={4} className="side__titles">Questions</Title>
        <div className="side__menu__qa">
          <canvas id="myChart" width="250px" height="250px"></canvas>
        </div>
      </div>
      <div className="exam__q__1">
        <div className="exam__top__bar">
          <div className="qa__btns">
            <Button type="primary">Next</Button>
            <Button type="dashed" style={{ marginLeft: '1rem' }} disabled>Submit</Button>
          </div>
          <div className="side__bar">
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={5}
              pageSize={5}
              total={20}
            />
          </div>
        </div>
        {
          Questions.map((each: IQuestions) =>
            <div className="exam__qa__container">
              <Title level={3} className="exam__q__title">{each.index}.  {each.question}</Title>
              <div className="exam__answers__holder">
                {each.answers ? each.answers.map(ans => <Checkbox >{ans}</Checkbox>) :
                  <TextArea
                    value={textValue}
                    onChange={onTextChange}
                    placeholder="너의 답"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                }
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}
