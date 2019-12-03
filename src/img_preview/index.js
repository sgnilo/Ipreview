import * as React from 'react'
import { PropTypes } from 'prop-types'

const CloseSvg = <svg t="1575361937812" className="icon close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5238" width="40" height="40"><path d="M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z" p-id="5239" fill="#ffffff"></path></svg>

const TurnLeft = <svg t="1575362236009" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6016" width="40" height="40"><path d="M768.853333 785.066667a17.066667 17.066667 0 0 1-17.066666-17.066667v-133.12c-1.041067-52.462933-19.7632-96.3584-57.275734-133.853867-37.495467-37.495467-81.117867-56.234667-133.358933-57.2928H297.7792l145.1008 142.267734a17.066667 17.066667 0 0 1-23.893333 24.3712L244.0704 438.869333l-0.068267-0.068266-0.0512-0.0512-0.034133-0.017067-0.034133-0.034133-0.034134-0.034134-0.017066-0.017066a17.015467 17.015467 0 0 1-0.682667-23.125334c0.290133-0.341333 0.597333-0.648533 0.904533-0.955733l170.581334-170.581333a17.0496 17.0496 0 1 1 24.132266 24.132266L297.198933 409.6H561.493333c60.962133 1.2288 113.7152 23.876267 157.1328 67.293867 43.451733 43.400533 66.082133 96.4608 67.2768 157.661866V768a17.032533 17.032533 0 0 1-17.0496 17.066667z" p-id="6017" fill="#ffffff"></path></svg>

const TurnRight = <svg t="1575362402649" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6207" width="40" height="40"><path d="M256 785.066667a17.066667 17.066667 0 0 1-17.066667-17.066667v-133.12c1.2288-61.5424 23.876267-114.5856 67.293867-157.986133 43.451733-43.4176 96.2048-66.065067 156.791467-67.293867h264.635733l-141.533867-141.533867a17.0496 17.0496 0 1 1 24.132267-24.132266l170.666667 170.666666a0.2048 0.2048 0 0 1 0.0512 0.034134l0.3072 0.3072 0.017066 0.034133a17.015467 17.015467 0 0 1 0.3072 23.057067c-0.290133 0.3072-0.5632 0.6144-0.8704 0.904533L605.866667 610.372267a17.066667 17.066667 0 1 1-23.893334-24.3712L727.074133 443.733333H463.36c-51.8656 1.058133-95.488 19.797333-133.000533 57.2928-37.495467 37.461333-56.234667 81.373867-57.2928 134.1952V768a17.066667 17.066667 0 0 1-17.066667 17.066667z" p-id="6208" fill="#ffffff"></path></svg>

const ScaleLarge = <svg t="1575363625508" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22460" width="200" height="200"><path d="M832 490.667H533.333V194.133c0-12.8-8.533-21.333-21.333-21.333s-21.333 8.533-21.333 21.333v296.534L192 488.533c-12.8 0-21.333 8.534-21.333 21.334S179.2 531.2 192 531.2l298.667 2.133V832c0 12.8 8.533 21.333 21.333 21.333S533.333 844.8 533.333 832V533.333H832c12.8 0 21.333-8.533 21.333-21.333 0-10.667-10.666-21.333-21.333-21.333z" fill="#ffffff" p-id="22461"></path></svg>

const ScaleSmall = <svg t="1575363685639" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23231" width="200" height="200"><path d="M222.72 496l577.28 0 0 32-577.28 0 0-32Z" p-id="23232" fill="#ffffff"></path></svg>

const DownloadSvg = <svg t="1575363543708" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17149" width="200" height="200"><path d="M502.285141 584.823467 292.418261 374.9568C284.087083 366.625707 270.579584 366.625707 262.248405 374.9568 253.917184 383.287893 253.917184 396.795307 262.248405 405.1264L508.675541 651.553707C513.424213 656.302507 519.854592 658.344533 526.049579 657.679787 532.244565 658.344533 538.674944 656.302507 543.423616 651.553707L789.850752 405.1264C798.181973 396.795307 798.181973 383.287893 789.850752 374.9568 781.519573 366.625707 768.012075 366.625707 759.680896 374.9568L544.951808 589.68576 544.951808 234.666667C544.951808 222.884693 535.400533 213.333333 523.618475 213.333333 511.836373 213.333333 502.285141 222.884693 502.285141 234.666667L502.285141 584.823467ZM762.551808 810.666667C774.333867 810.666667 783.885141 801.115307 783.885141 789.333333 783.885141 777.55136 774.333867 768 762.551808 768L284.685141 768C272.90304 768 263.351808 777.55136 263.351808 789.333333 263.351808 801.115307 272.90304 810.666667 284.685141 810.666667L762.551808 810.666667Z" p-id="17150" fill="#ffffff"></path></svg>

const ImgPre = <svg t="1575374368419" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23699" width="200" height="200"><path d="M695.04 840.32 399.36 541.44l285.44-295.04c12.16-12.8 12.16-33.28 0-45.44-12.16-12.8-32-12.8-44.16 0l-309.76 320c-12.16 12.8-12.16 33.28 0 45.44C333.44 568.96 336 570.24 339.2 572.16l311.04 314.24c12.8 12.8 32.64 12.8 45.44 0C707.2 873.6 707.2 853.12 695.04 840.32z" p-id="23700" fill="#ffffff"></path></svg>

const ImgNext = <svg t="1575374422968" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24197" width="200" height="200"><path d="M695.04 520.32l-318.08-320c-12.8-12.8-33.28-12.8-45.44 0-12.8 12.8-12.8 33.28 0 45.44l293.12 295.04-303.36 298.88c-12.8 12.8-12.8 33.28 0 45.44 12.8 12.8 33.28 12.8 46.08 0l318.72-314.24C699.52 559.36 712.32 538.88 695.04 520.32z" p-id="24198" fill="#ffffff"></path></svg>

class ImgPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            preview: false,
            rotate: 0,
            scale: 1,
            activeIndex: 0
        }
    }

    cancelDefault(e) {
        e.stopPropagation()
    }

    turnLeft() {
        this.setState({
            rotate: this.state.rotate - 90
        })
    }
    
    turnRight() {
        this.setState({
            rotate: this.state.rotate + 90
        })
    }

    large() {
        if (this.state.scale >= 3) return false
        this.setState({
            scale: this.state.scale + 0.1
        })
    }

    addActiveIndex() {
        const { urlList } = this.props
        const maxLength = urlList && urlList.length
        if (this.state.activeIndex >= maxLength - 1) return false
        this.setState({
            activeIndex: this.state.activeIndex + 1
        })
    }

    minusActiveIndex() {
        if (this.state.activeIndex <= 0) return false
        this.setState({
            activeIndex: this.state.activeIndex - 1
        })
    }

    small() {
        if (this.state.scale <= 0.1) return false
        this.setState({
            scale: this.state.scale - 0.1
        })
    }

    changePreview(){
        this.setState({
            preview: !this.state.preview
        })
    }

    render() {
        const { children, concise, download, url, urlList, iconSet, zIndex } = this.props
        const { preview, rotate, scale, activeIndex } = this.state
        const maxIndex = urlList[0] && urlList.length - 1
        return (
        <div onClick={() => {this.changePreview()}} style={{zIndex: preview ? zIndex : undefined}}>
            {children}
            {preview && (
                <div className="preview-wrapper" onClick={(event) => {this.cancelDefault(event)}} onScroll={(event) => {this.cancelDefault(event)}}>
                    <img className="preview-img" src={urlList[0] ? urlList[activeIndex] : url} style={{transform: `rotate(${rotate}deg) scale(${scale})`}} />
                    <div className="preview-close preview-tool"onClick={() => {this.changePreview()}}>
                        {iconSet.close}
                    </div>
                    {!concise && urlList[0] && <div className="preview-count-box">
                        {`${activeIndex + 1} / ${urlList[0] ? urlList.length : ''}`}
                    </div>}
                    {!concise && urlList[0] && <div className={`preview-tool img-pre${activeIndex <= 0 ? ' disabled' : ''}`} onClick={() => {this.minusActiveIndex()}}>
                        {iconSet.pre}
                    </div>}
                    {!concise && urlList[0] && <div className={`preview-tool img-next${activeIndex >= maxIndex ? ' disabled' : ''}`} onClick={() => {this.addActiveIndex()}}>
                        {iconSet.next}
                    </div>}
                    {!concise && <div className="preview-tool-bar">
                        <div className="preview-tool" onClick={() => {this.turnLeft()}}>
                            {iconSet.rotateLeft}
                        </div>
                        <div className="preview-tool" onClick={() => {this.turnRight()}}>
                            {iconSet.rotateRight}
                        </div>
                        <div className={`preview-tool${scale >= 3 ? ' disabled' : ''}`} onClick={() => {this.large()}}>
                            {iconSet.large}
                        </div>
                        <div className={`preview-tool${scale <= 0.1 ? ' disabled' : ''}`} onClick={() => {this.small()}}>
                            {iconSet.small}
                        </div>
                        {download && <div className="preview-tool">
                            <a href={urlList[0] ? urlList[activeIndex] : url} download>{iconSet.download}</a>
                        </div>}
                    </div>}
                </div>
            )}
        </div>
        )
    }
}

ImgPreview.propTypes = {
    concise: PropTypes.bool,
    download: PropTypes.bool,
    url: PropTypes.string.isRequired,
    urlList: PropTypes.array,
    iconSet: PropTypes.object,
    zIndex: PropTypes.number
}

ImgPreview.defaultProps = {
    concise: false,
    download: false,
    urlList: [],
    iconSet: {
        close: CloseSvg,
        pre: ImgPre,
        next: ImgNext,
        rotateLeft: TurnLeft,
        rotateRight: TurnRight,
        large: ScaleLarge,
        small: ScaleSmall,
        download: DownloadSvg
    },
    zIndex: 999
}


export default ImgPreview