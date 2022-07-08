import { PageContainer } from '@ant-design/pro-components';
import ProSkeleton from '@ant-design/pro-skeleton';
import { Form } from 'antd';
import React from 'react';
const Setting: React.FC = () => {
    return (
        <PageContainer ghost>
            <ProSkeleton
                type="list"
                list={4}
                pageHeader={false}
                statistic={false}
                toolbar={false}
            />
            <Form />
        </PageContainer>
    );
};

export default Setting;
