import PropTypes from "prop-types";
const Heading = ({ level, children }) => {
    const HeadingTag = `h${level}`;
    const getHeadingStyles = (level) => {
        switch (level) {
            case "1":
                return "text-[60px] text-[#091736] font-[700] leading-[1em] tracking-[-2px]";
            case "2":
                return " text-[42px] text-[#091736] tracking-[-2px] leading-[1.1em] font-[800]";
            case "3":
                return "text-[24px]  text-[#091736] font-[700] leading-[1em] ";
            case "4":
                return "text-[#091736] text-[24px] font-[700] leading-[1.3em]";
            case "5":
                return "text-[40px] text-[#091736] font- normal"
            case "6":
                return "text-[14px] font-[400] leading-[1.5em] tracking-[2px]"
                case "7":
                    return "text-[50px] text-[#091736] font-[700] leading-[1em] tracking-[-2px]";
                    case "8":
                        return "text-[28px] text-[#091736] font-[700] leading-[1em] tracking-[1px]";
                        
            default:
                return "text-lg"
        }
    }
     const headingStyle = getHeadingStyles(level);
     return <HeadingTag className={headingStyle}>{children}</HeadingTag>
    };
    Heading.PropTypes ={
        level : PropTypes.oneOf(["1","2","3","4","5","6"])
    };
    export default Heading