import { useEffect, useState } from "react";
import { DatabaseFilled, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { AiTwotoneDelete } from "react-icons/ai";
import AttributeModal from "./AttributeModal";
import { GiPriceTag } from "react-icons/gi";
import PriceModal from "./PriceModal";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loadar from "../../common/loader/Loader";
import { baseUrlImage } from "../../baseUrl";
export const ColorVariant = ({
  data,
  deleteRow,
  setVariantsData,
  index,
  sellerD,
  updateVarientDetails,
}) => {
  const [formData, setFormData] = useState(data);
  const [prices, setprices] = useState(data.prices);
  const onChangeHandler = (e) => {
    const inputName = e.target.name;
    const inputVal = e.target.value;
    setFormData({ images: [], ...formData, [inputName]: inputVal });
    //setVariantsData(formData);
  };
  const params = useParams();

  const [shoing, setShping] = useState(false);
  const [shoingLoader, setshoingLoader] = useState(false);

  useEffect(() => {
    updateVarientDetails(formData);
  }, [formData]);
  const onchangeImgeHandler = async (e) => {
    setShping(false);
    setshoingLoader(true);
    const inpVal = e.target.files;
    const images = new FormData();
    let cloneAllData = JSON.parse(JSON.stringify(formData));

    for (let ind = 0; ind < inpVal?.length; ind++) {
      try {
        const element0 = inpVal[ind];
        images.set("image", element0);

        const res = await axios.post(
          "https://backoffice.adamclick.com/api/cloudinary/addImage",
          images
        );
        const obj = { public_id: res.data.data.public_id, url: res.data.data.url };
        if (e.target.name === "gallery_image") {
          if (cloneAllData?.images) {
            cloneAllData.images.push(obj);
          } else {
            cloneAllData.images = [obj];
          }
        } else {
          cloneAllData.mainImage_url = obj;
        }
      } catch (error) {
        console.log("Gallery Image not uploaded");
      } finally {
        images.delete("image");
      }
    }
    setshoingLoader(false);
    setFormData(cloneAllData);
  };

  const setData = (data, i) => {
    const clone = { ...data };
    setFormData(clone);
  };
  const setDataArtibutr = (data) => {
    const clone = { ...data };
    console.log("Attributes data", clone);
    setFormData(clone);
    //updateVarientPriceAndAttributes(clone);
  };
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  useEffect(() => {
    if (params) {
      setShping(true);
    }
  }, [params]);

  //   const setPriceData = (data) => {
  //     setData(data);
  //     updateVarientDetails(data);
  //   };
  console.log(data?.images);
  
  return (
    <>
      {shoingLoader && <Loadar />}
      <tr className="sizzings">

        <td>
          <Popconfirm
            title="Delete !"
            description="Are you sure to delete this variant?"
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
            onConfirm={() => {
              deleteRow(data._id);
            }}
          >
            <Button danger>
              <AiTwotoneDelete />
            </Button>
          </Popconfirm>
        </td>
        <td>
          <label name="varient" className="control-label">
            {data.weight}
          </label>
        </td>
        <td>
          <input
            type="text"
            name="uid"
            value={data.uid}
            className="form-control"
            onChange={onChangeHandler}
          />
        </td>
        <td>
          <label
            name="varient"
            className="control-label"
            style={{ cursor: "pointer" }}
            onClick={() => setModalShow2(true)}
          >
            <GiPriceTag style={{ fontSize: "20px" }} />
          </label>
        </td>
        <td>
          <DatabaseFilled onClick={() => setModalShow(true)} />
        </td>
        <td>
          {!!data?.images?.length &&
            data?.images?.map((item) => {
              return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  key={item.url}
                  style={{ width: "100px", height: "100px" }}
                  src={`${baseUrlImage}${item?.url}`}
                />
              );
            })}
          <input
            type="file"
            name="gallery_image"
            multiple
            accept="image/*"
            className="form-control"
            onChange={onchangeImgeHandler}
          />
        </td>
        <td>
          {!!data?.mainImage_url?.url && (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              style={{ width: "100px", height: "100px" }}
              // src={data?.mainImage_url?.url}
              src={`${baseUrlImage}${data?.mainImage_url?.url}`}
            />
          )}
          <input
            type="file"
            name="mainImage_url"
            accept="image/*"
            className="form-control"
            onChange={onchangeImgeHandler}
          />
        </td>

        {modalShow && (
          <AttributeModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setDataArtibutr={setDataArtibutr}
            formData={formData}
            data={data}
          />
        )}
        {modalShow2 && (
          <PriceModal
            show={modalShow2}
            onHide={() => setModalShow2(false)}
            prices={prices}
            data={data}
            setData={setData}
            sellerD={sellerD}
            index={index}
          />
        )}
      </tr>
    </>
  );
};
