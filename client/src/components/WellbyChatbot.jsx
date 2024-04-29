const WellbyChatbot = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <df-messenger
        chat-icon="https:&#x2F;&#x2F;cdn-icons-png.flaticon.com&#x2F;128&#x2F;8943&#x2F;8943377.png"
        intent="WELCOME"
        chat-title="Wellby"
        agent-id="33057093-a80b-415d-90b5-62702409f1d6"
        language-code="en"
      ></df-messenger>
    ` }} />
  );
}

export default WellbyChatbot;