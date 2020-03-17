import React, { ReactElement, useEffect } from 'react'
import './dashboard.css'
import { Avatar, Typography, Card } from 'antd';
import { UserOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Chart from 'chart.js'

const { Title } = Typography;
interface Props {

}

export default function DashboardPage(): ReactElement {
  useEffect(() => {
    document.getElementById('footer')?.style.setProperty('display', 'none');
    const canvas: any = document.getElementById('performance__chart');
    const ctx = canvas.getContext('2d');
    var s1 = {
      label: 'Exam Achieved Marks',
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
      data: [
        { x: '2020-02-07 18:00:00', y: 15 },
        { x: '2020-02-08 18:00:00', y: 22 },
      ]
    };

    var s2 = {
      label: 'Exam Total Marks',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
      data: [
        { x: '2020-02-07 18:00:00', y: 30 },
        { x: '2020-02-08 18:00:00', y: 30 },
      ]
    };
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Score', 'Exam Date'],
          datasets: [s1, s2],

        },
        options: {
          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'series',
              time: {
                unit: 'month'
              },
              ticks: {
                suggestedMin: new Date('2020-01-00 18:00:00').getUTCMilliseconds(),
                // suggestedMax: 100
              }
            }],
            yAxes: [{
              ticks: {
                suggestedMin: 0,
                // suggestedMax: 100
              }
            }],
          }
        },
      });
    }
  }, [])

  return (
    <div className="dashboard__page">
      <div className="dash__side__menu">
        <Avatar size={128} icon={<UserOutlined />} />
        <h3>Ashish Kafle</h3>
        <div className="dash__side__menu__controls">
          <div className="dash__side__data">
            <Title level={4} className="data__title">Exams Taken</Title>
            <b>2</b>
          </div>
          <div className="dash__side__data">
            <Title level={4} className="data__title">Upcoming Exams</Title>
            <b>0</b>
          </div>
          <div className="dash__side__data">
            <Title level={4} className="data__title">Overall Performance</Title>
            <b>7/10</b>
          </div>
        </div>
      </div>
      <div className="dash__main__content">
        <div className="exam__results__container">
          <h2>Exam History</h2>
          <LeftOutlined className="left__outline" />
          <div className="exam__side__scroller">
            <Card className="exam__results__card"
              extra={<a href="#">More</a>}
              title="Weekly Exam 2020" style={{ width: 250 }}>
              <p>Total Questions    20</p>
              <p>Answered     18</p>
              <p>Result     33/40</p>
            </Card>
            <Card className="exam__results__card"
              extra={<a href="#">More</a>}
              title="Weekly Exam 2020" style={{ width: 250 }}>
              <p>Total Questions    20</p>
              <p>Answered     18</p>
              <p>Result     33/40</p>
            </Card>
            <Card className="exam__results__card"
              extra={<a href="#">More</a>}
              title="Weekly Exam 2020" style={{ width: 250 }}>
              <p>Total Questions    20</p>
              <p>Answered     18</p>
              <p>Result     33/40</p>
            </Card>
            <RightOutlined className="right__outline" />
          </div>
        </div>
        <div className="overall__performance">
          <h2>Overall Performance</h2>
          <div className="canvas__holder">
            <canvas id="performance__chart" width="250px" height="250px"></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}
