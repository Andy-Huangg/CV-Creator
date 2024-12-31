export default function PersonalInformation({ isActive, onShow }) {
  const content = () => {
    return (
      <div>
        <form>
          <label>
            School:<input type="text"></input>
          </label>
        </form>
      </div>
    );
  };
  return (
    <section>
      <h2 onClick={onShow}>Education</h2>

      {isActive ? content() : null}
    </section>
  );
}
