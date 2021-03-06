const FolderModel = require("../../model/folder-model");

const createFolder = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a folder",
    });
  }

  const folder = new FolderModel(body);

  if (!folder) {
    return res.status(400).json({ success: false, error: res });
  }

  folder
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: folder._id,
        message: "folder created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "folder not created!",
      });
    });
};

const getFolderActive = async (req, res) => {
  await FolderModel.findOne(
    { active: true, user: req.params.user },
    (err, data) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!data) {
        return res
          .status(404)
          .json({ success: false, error: `Folder not found` });
      }
      return res.status(200).json({ success: true, data });
    }
  ).catch((err) => console.log(err));
};

const updateFolder = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  FolderModel.findOne({ _id: req.params.id }, (err, folder) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Folder not found!",
      });
    }
    folder.name = body.name;
    folder.dateStart = body.dateStart;
    folder.dateEnd = body.dateEnd;
    folder.active = body.active;
    folder
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: folder._id,
          message: "Folder updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Folder not updated!",
        });
      });
  });
};

const getFoldersInactive = async (req, res) => {
  await FolderModel.find(
    { active: false, user: req.params.user },
    (err, folder) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!folder) {
        return res
          .status(404)
          .json({ success: false, error: `Folder not found` });
      }
      return res.status(200).json({ success: true, data: folder });
    }
  ).catch((err) => console.log(err));
};

module.exports = {
  createFolder,
  getFolderActive,
  updateFolder,
  getFoldersInactive,
};
