import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.panagiotis.dev</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
