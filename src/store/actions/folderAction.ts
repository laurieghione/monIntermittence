import Folder from "../../model/folder";
import * as folderTypes from "../types/folderTypes";
import apis from "../../api";

export function addFolder(newFolder: Folder): folderTypes.FolderActionTypes {
  return {
    type: folderTypes.ADD_FOLDER,
    payload: newFolder,
  };
}

export function deleteFolder(): folderTypes.FolderActionTypes {
  return {
    type: folderTypes.DELETE_FOLDER,
  };
}

export function loadFolderSuccess(
  folder: Folder
): folderTypes.FolderActionTypes {
  return {
    type: folderTypes.LOAD_FOLDER_SUCCESS,
    folder,
  };
}

export function loadActiveFolder(user: string) {
  return async function (dispatch: any) {
    try {
      const folder = await apis.getActiveFolder(user);
      dispatch(loadFolderSuccess(folder.data.data));
    } catch (err) {
      console.log(err);
    }
  };
}
