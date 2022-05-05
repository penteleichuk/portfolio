export const LinkDisabled = ({ icon }: { icon: string }) => {
    return (
        <span className="button link-modern link-modern_hover">
            <img src={icon} alt="icon" />
        </span>
    );
}