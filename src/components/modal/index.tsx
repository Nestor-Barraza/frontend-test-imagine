import React, { FC } from "react";
import { Button, Modal } from "semantic-ui-react";
import { openModalAction } from "./modalAction";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";
import {
  EmailBox,
  DownloadPdf,
  FormEdit,
  Parallax,
  FormAdd,
  FormAddProduct,
  FormEditProduct,
} from "..";
import "./styles.css";
const ModalCustom: FC = (): JSX.Element => {
  //Redux state
  const { isModalOpen, modalChildrenRef } = useSelector(
    (state: RootState) => state.modal
  );

  //Type component
  const children =
    modalChildrenRef === "email" ? (
      <EmailBox />
    ) : modalChildrenRef === "download" ? (
      <DownloadPdf />
    ) : modalChildrenRef === "edit-enterprise" ? (
      <FormEdit />
    ) : modalChildrenRef === "create-enterprise" ? (
      <FormAdd />
    ) : modalChildrenRef === "create-product" ? (
      <FormAddProduct />
    ) : modalChildrenRef === "edit-product" ? (
      <FormEditProduct />
    ) : (
      ""
    );
  return (
    <Modal className="modal-container" open={isModalOpen}>
      <Button
        className="btn-modal"
        color="google plus"
        icon="close"
        onClick={() => openModalAction(false, "", {})}
        positive
      />
      <Parallax />
      <Modal.Content className="modal-content">{children}</Modal.Content>
    </Modal>
  );
};

export default ModalCustom;
