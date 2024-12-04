import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BirthdayandAnaverFilter from './birthdayandanvFillter/BirthdayandAnaverFilter';
import BirthdayAndAnniversaryList from './birthdayandanniversaryList/BirthdayAndAnniversaryList';

function BirthdayAndAnniversary() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Birthday And Anniversary Report',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BirthdayandAnaverFilter/>
            <BirthdayAndAnniversaryList/>
        </>
    )
}

export default BirthdayAndAnniversary