import { Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import common from '@/styles/common.module.css'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/index';
import { search_courses } from '@/store/reducers/courseReducer';

export default function HeaderSearch() {
      const dispatch = useDispatch<AppDispatch>();
      const handleSearch = (value: string) => {
        console.log("Input value: ", value)
         dispatch(search_courses({ name: value, offset: 0, limit: 10 }))
      }
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
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}