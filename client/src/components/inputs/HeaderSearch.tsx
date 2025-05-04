import { Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import common from '@/styles/common.module.css'
export default function HeaderSearch() {
    return (
        <div className={common.home_search}>
            <Input
                placeholder="Enter somthing..."
                style={{ width: "30rem", borderRadius: '25px' }}
                suffix={
                    <Tooltip placement="rightTop" title="Go to search">
                      <SearchOutlined className={common.home_searchbutton} />
                    </Tooltip>
                  }
            />
        </div>
    );
}