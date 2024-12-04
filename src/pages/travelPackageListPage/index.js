import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import PackageFIlter from '../../components/travelPackageListComp/PackageFIlter'
import PackageList from '../../components/travelPackageListComp/PackageList'
import { getTravelPackageList } from '../../api/login/Login';

function TravelPackageListPage() {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState();

    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    const [pageIndex, setPageIndex] = useState(0)
    const [countToShowInTable, setCountToShowInTable] = useState(10)

    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Packages",
        title_2: '',
    };

    const getListData = async (page) => {
        setLoading(true);
        try {
            const res = await getTravelPackageList(page, count);
            setTotalCount(res?.totalCount)
            setListData(res?.data);
            setPage(page)
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getListData();
    }, []);

    const onChangeVal = (e) => {
        getListData(e - 1)
        setPageIndex(e - 1)
    };

    return (
        <>
            {loading && (
                <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PackageFIlter />
            <PackageList listData={listData} totalCount={totalCount} page={page} onChangeVal={onChangeVal} count={count} pageIndex={pageIndex} countToShowInTable={countToShowInTable} />
        </>
    )
}

export default TravelPackageListPage