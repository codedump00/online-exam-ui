import React, { ReactElement, useEffect } from 'react';
import './exam.css';
import { PageHeader } from 'antd';
import { useHistory } from 'react-router';

interface Props {
  setNavbar: any;
}

export default function ExamDetails({ setNavbar }: Props): ReactElement {
  const history = useHistory();
  useEffect(() => {
    document.getElementById('nav__header')?.style.setProperty('display', 'none');
    document.getElementById('footer')?.style.setProperty('display', 'none');
  })

  const handleBack = () => {
    document.getElementById('nav__header')?.style.setProperty('display', 'block');
    history.goBack();
  }

  return (
    <div className="exam__details__page">
      <PageHeader
        className="site-page-header"
        onBack={handleBack}
        title="Weekly Exam 2020"
        subTitle="2020-02-07 18:00:00"
      />
    </div>
  )
}
