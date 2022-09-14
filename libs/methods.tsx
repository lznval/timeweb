import {
    createMainFrame,
    createNavigationList,
    createInfoList,
    createLabelsList,
    createCommentsList
} from './factory';


const query = (): Promise<Response> => {
    return fetch('http://localhost:3000/mock.json/')
        .then(resp => resp)
}

export const getNavigationList = (): Promise<API.NavigationList> =>
    query()
        .then(resp => resp.json())
        .then(createNavigationList);

export const getMainFrame = (): Promise<API.MainFrame> =>
    query()
        .then(resp => resp.json())
        .then(createMainFrame);

export const getInfoList = (): Promise<API.InfoList> =>
    query()
        .then(resp => resp.json())
        .then(createInfoList);

export const getLabelsList = (): Promise<API.LabelsList> =>
    query()
        .then(resp => resp.json())
        .then(createLabelsList);

export const getCommentsList = (): Promise<API.CommentsList> =>
    query()
        .then(resp => resp.json())
        .then(createCommentsList);  