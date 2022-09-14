export const createNavigation = (data: any): API.Navigation => {
    const { title, link } = data;
    return ({
        title, link
    } as API.Navigation)
}

export const createNavigationList = (data: any): API.NavigationList => {
    const { navigation } = data;
    return ({
        navigation: navigation.map(createNavigation)
    } as API.NavigationList)
}

export const createMainFrame = (data: any): API.MainFrame => {
    return data as API.MainFrame;
}

export const createInfo = (data: any): API.Info => {
    const { image, title, description } = data;
    return ({
        image, title, description
    } as API.Info)
}

export const createInfoList = (data: any): API.InfoList => {
    const { info } = data;
    return ({
        info: info.map(createInfo)
    } as API.InfoList)
}

export const createLabels = (data: any): API.Labels => {
    const { title, subtitle } = data;
    return ({
        title, subtitle
    } as API.Labels)
}

export const createLabelsList = (data: any): API.LabelsList => {
    const { labels } = data;
    return ({
        labels: labels.map(createLabels)
    } as API.LabelsList)
}

export const createComments = (data: any): API.Comments => {
    const { rating, text, user: { image, name, profession } } = data;
    return ({
        rating, text, user: { image, name, profession }
    } as API.Comments)
}

export const createCommentsList = (data: any): API.CommentsList => {
    const { comments } = data;
    return ({
        comments: comments.map(createComments)
    } as API.CommentsList)
}